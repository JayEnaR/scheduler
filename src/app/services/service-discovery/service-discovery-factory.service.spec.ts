import { TestBed } from '@angular/core/testing';

import { ServiceDiscoveryFactoryService } from './service-discovery-factory.service';

describe('ServiceDiscoveryFactoryService', () => {
  let service: ServiceDiscoveryFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDiscoveryFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
