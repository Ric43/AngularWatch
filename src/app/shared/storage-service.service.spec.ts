import { TestBed, inject } from '@angular/core/testing';

import { StoreageServiceService } from './storeage-service.service';

describe('StoreageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreageServiceService]
    });
  });

  it('should be created', inject([StoreageServiceService], (service: StoreageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
