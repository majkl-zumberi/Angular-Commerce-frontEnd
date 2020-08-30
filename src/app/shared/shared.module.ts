import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DressPreviewComponent} from './components/dress-preview/dress-preview.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { DressTypePickerComponent } from './components/dress-type-picker/dress-type-picker.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {RouterModule} from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';
import {WarningComponent} from './svg/warning/warning.component';
import {SuccessComponent} from './svg/success/success.component';



@NgModule({
  declarations: [
    DressPreviewComponent,
    ColorPickerComponent,
    DressTypePickerComponent,
    CartItemComponent,
    ModalComponent,
    WarningComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DressPreviewComponent,
    ColorPickerComponent,
    DressTypePickerComponent,
    CartItemComponent,
    ModalComponent,
    WarningComponent,
    SuccessComponent
  ]
})
export class SharedModule { }
