import { TestBed, async, inject } from '@angular/core/testing';

import { IsTermsAndConditionAcceptedGuard } from './is-terms-and-condition-accepted.guard';

describe('IsTermsAndConditionAcceptedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsTermsAndConditionAcceptedGuard]
    });
  });

  it('should ...', inject([IsTermsAndConditionAcceptedGuard], (guard: IsTermsAndConditionAcceptedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
