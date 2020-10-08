import { TestBed } from '@angular/core/testing';

import { Jwt.InterceptorService } from './jwt.interceptor.service';

describe('Jwt.InterceptorService', () => {
  let service: Jwt.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jwt.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
