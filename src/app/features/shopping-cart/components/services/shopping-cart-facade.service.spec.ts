import { TestBed } from '@angular/core/testing';

import { ShoppingCartFacadeService } from './shopping-cart-facade.service';

describe('ShoppingCartFacadeService', () => {
  let service: ShoppingCartFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
