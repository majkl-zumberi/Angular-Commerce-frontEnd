import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartProductItemComponent } from './cart-product-item.component';

describe('CartProductItemComponent', () => {
  let component: CartProductItemComponent;
  let fixture: ComponentFixture<CartProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
