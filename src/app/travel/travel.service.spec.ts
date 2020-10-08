import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/services/travel.service.spec.ts
import { TravelService } from '../travel/travel.service';
=======
import { TravelService } from './travel.service';
>>>>>>> 8f5b7ea031ca6f0bab8321e4c3e91bad42af9364:src/app/travel/travel.service.spec.ts

describe('TravelService', () => {
  let service: TravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
