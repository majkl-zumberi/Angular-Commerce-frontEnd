import { TestBed } from '@angular/core/testing';

import { CanLoadAuthGuard } from './can-load-auth.guard';

describe('CanLoadAuthGuard', () => {
  let guard: CanLoadAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
