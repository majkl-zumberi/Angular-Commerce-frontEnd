import { TestBed } from '@angular/core/testing';

import { CanActivateStepsGuard } from './can-activate-steps.guard';

describe('CanActivateStepsGuard', () => {
  let guard: CanActivateStepsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateStepsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
