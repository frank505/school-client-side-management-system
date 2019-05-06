import { TestBed, inject } from '@angular/core/testing';

import { AuthGaurdUserService } from './auth-gaurd-user.service';

describe('AuthGaurdUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurdUserService]
    });
  });

  it('should be created', inject([AuthGaurdUserService], (service: AuthGaurdUserService) => {
    expect(service).toBeTruthy();
  }));
});
