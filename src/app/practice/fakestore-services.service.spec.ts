import { TestBed } from '@angular/core/testing';

import { FakestoreServicesService } from './fakestore-services.service';

describe('FakestoreServicesService', () => {
  let service: FakestoreServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
