import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressTypePickerComponent } from './dress-type-picker.component';

describe('DressTypePickerComponent', () => {
  let component: DressTypePickerComponent;
  let fixture: ComponentFixture<DressTypePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressTypePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressTypePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
