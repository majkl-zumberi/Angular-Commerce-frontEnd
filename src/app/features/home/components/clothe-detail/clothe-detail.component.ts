import {Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Dress} from '../../../../core/model/dress.interface';
import {getCurrentNavigatedClothe} from '../../../../redux';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {SuccessModalComponent} from '../success-modal/success-modal.component';

@Component({
  selector: 'app-clothe-detail',
  templateUrl: './clothe-detail.component.html',
  styleUrls: ['./clothe-detail.component.scss'],
})
export class ClotheDetailComponent implements OnInit {
  image: string;
  customizeForm: FormGroup;

  get clothe(): Observable<Dress> {
    return this.store.pipe(select(getCurrentNavigatedClothe));
  }
  @ViewChild('parent', {read: ViewContainerRef}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private fb: FormBuilder,
              private store: Store, private route: ActivatedRoute,
              private componentFactoryResolver: ComponentFactoryResolver) {
     this.image = this.route.snapshot.queryParamMap.get('img');
     this.customizeForm = this.fb.group({
      productColor: ['', Validators.required],
      customText: [''],
      textColor: [''],
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
  }

  ngOnInit(): void {
  }

  addToCart() {
    console.log('cliccato');
    console.log(this.customizeForm.value);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory(SuccessModalComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }


  resetForm() {
    this.customizeForm.patchValue({
      productColor: '',
      customText: '',
      textColor: ''
    });
    this.customizeForm.reset();
    this.customizeForm.get('textColor').disable();
  }

}
