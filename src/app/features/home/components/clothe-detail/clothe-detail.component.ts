/* tslint:disable:no-inferrable-types */
import {Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Dress} from '../../../../core/model/dress.interface';
import {getCurrentNavigatedClothe} from '../../../../redux';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CartProduct} from '../../../../core/model/CartProduct.interface';
import {ClothesFacadeService} from '../services/clothes-facade.service';

@Component({
  selector: 'app-clothe-detail',
  templateUrl: './clothe-detail.component.html',
  styleUrls: ['./clothe-detail.component.scss'],
})
export class ClotheDetailComponent implements OnInit {
  image: string;
  customizeForm: FormGroup;
  currentDress: Dress;
  modalVisible: boolean = false;
  get clothe(): Observable<Dress> {
    return this.store.pipe(select(getCurrentNavigatedClothe));
  }

  constructor(private fb: FormBuilder,
              private store: Store, private route: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver,
              private facadeService: ClothesFacadeService) {
     this.image = this.route.snapshot.queryParamMap.get('img');
     this.customizeForm = this.fb.group({
      productColor: ['', Validators.required],
      customText: [''],
      textColor: [''],
      currentImage: [''],
      dressType: ['', Validators.required]
    });
     this.customizeForm.get('customText').valueChanges.subscribe(text => {
      console.log(text);
      if (text === '') {
        this.customizeForm.get('textColor').disable();
      } else {
        this.customizeForm.get('textColor').enable();
      }
    });
     this.customizeForm.get('textColor').disable();
     this.clothe.subscribe(clothe => {
       this.currentDress = clothe;
       console.log(this.currentDress);
       this.customizeForm.patchValue({
          currentImage: this.image
       });
     });
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.modalVisible = true;
    console.log('cliccato');
    console.log(this.customizeForm.value);
    console.log(this.currentDress);
    let cart: CartProduct;
    cart = {
      ...this.customizeForm.value,
      prodotto:  {...this.currentDress}
    };
    this.facadeService.addToCart(cart);

  }


  resetForm() {
    this.customizeForm.patchValue({
      productColor: '',
      customText: '',
      textColor: '',
      dressType: ''
    });
    this.customizeForm.reset();
    this.customizeForm.get('textColor').disable();
  }

}
