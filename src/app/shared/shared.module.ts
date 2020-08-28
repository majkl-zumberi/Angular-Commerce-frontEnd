import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DressPreviewComponent} from './components/dress-preview/dress-preview.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';



@NgModule({
  declarations: [DressPreviewComponent, ColorPickerComponent],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DressPreviewComponent,
    ColorPickerComponent
  ]
})
export class SharedModule { }
