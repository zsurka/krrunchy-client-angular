import { TestBed, inject } from '@angular/core/testing';

import { KrrunchyBackendService } from './krrunchy-backend.service';

describe('KrrunchyBackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KrrunchyBackendService]
    });
  });

  it('should be created', inject([KrrunchyBackendService], (service: KrrunchyBackendService) => {
    expect(service).toBeTruthy();
  }));
});
