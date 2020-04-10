import { TestBed } from '@angular/core/testing';

import { CustDetailsGuard } from './cust-details.guard';

describe('CustDetailsGuard', () => {
  let guard: CustDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
