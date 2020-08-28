/* tslint:disable:no-inferrable-types */
import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true // non sovrascrivere ma aggiungi
    }
  ]
})
export class ColorPickerComponent implements OnInit, ControlValueAccessor {
  constructor() { }
  @Input()
  colors = [];

  @Output()
  colorChange: EventEmitter<string> = new EventEmitter<string>();

  opacity: number = 1;
  value: string;
  onTouched: () => void;
  onChanged: any = () => {};



  ngOnInit(): void {
  }

  changeColor(color: string) {
    this.value = color;
    this.colorChange.emit(color);
    this.onTouched();
    this.onChanged(color);
  }

  writeValue(color: string): void {
    this.value = color;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean) {
    this.opacity = isDisabled ? 0.3 : 1;
  }

}
