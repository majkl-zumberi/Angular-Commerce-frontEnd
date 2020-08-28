import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Dress} from '../../../../core/model/dress.interface';
import {getCurrentNavigatedClothe} from '../../../../redux';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-clothe-detail',
  templateUrl: './clothe-detail.component.html',
  styleUrls: ['./clothe-detail.component.scss']
})
export class ClotheDetailComponent implements OnInit {

  customizeForm: FormGroup;

  get clothe(): Observable<Dress> {
    return this.store.pipe(select(getCurrentNavigatedClothe));
  }
  constructor(private fb: FormBuilder, private store: Store) {
    this.customizeForm = this.fb.group({
      color: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.customizeForm.get('color').disable();
  }

  addToCart() {
    console.log('cliccato');
    console.log(this.customizeForm.value);
  }
}
