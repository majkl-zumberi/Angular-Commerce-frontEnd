import { TestBed } from '@angular/core/testing';

import { CanActivateAuthGuard } from './can-activate-auth.guard';

describe('CanActivateAuthGuard', () => {
  let guard: CanActivateAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
