import { TestBed } from '@angular/core/testing';

import { ClothesFacadeService } from './clothes-facade.service';

describe('ClothesFacadeService', () => {
  let service: ClothesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
