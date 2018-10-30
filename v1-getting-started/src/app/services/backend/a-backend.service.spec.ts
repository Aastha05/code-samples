import { TestBed, inject } from '@angular/core/testing';

import { ABackendService } from './a-backend.service';

describe('ABackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ABackendService]
    });
  });

  it('should be created', inject([ABackendService], (service: ABackendService) => {
    expect(service).toBeTruthy();
  }));
});
