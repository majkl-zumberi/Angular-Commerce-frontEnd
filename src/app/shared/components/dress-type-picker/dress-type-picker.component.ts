/* tslint:disable:no-inferrable-types */
import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-dress-type-picker',
  templateUrl: './dress-type-picker.component.html',
  styleUrls: ['./dress-type-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DressTypePickerComponent),
      multi: true // non sovrascrivere ma aggiungi
    }
  ]
})
export class DressTypePickerComponent implements OnInit, ControlValueAccessor {
  @Input()
  dressTypes = [];
  opacity: number = 1;
  value: string;

  constructor() { }
  onTouched: () => void;
  onChanged: any = () => {};

  ngOnInit(): void {
  }
  changeColor(dressType: string) {
    this.value = dressType;
    this.onTouched();
    this.onChanged(dressType);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(dressType: string): void {
    this.value = dressType;
  }

}
