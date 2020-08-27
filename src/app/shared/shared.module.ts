import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DressPreviewComponent} from './components/dress-preview/dress-preview.component';



@NgModule({
  declarations: [DressPreviewComponent],
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
    DressPreviewComponent
  ]
})
export class SharedModule { }
