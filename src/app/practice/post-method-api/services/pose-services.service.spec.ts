import { TestBed } from '@angular/core/testing';

import { PoseServicesService } from './pose-services.service';

describe('PoseServicesService', () => {
  let service: PoseServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoseServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
