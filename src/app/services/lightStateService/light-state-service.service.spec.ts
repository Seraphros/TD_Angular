import { TestBed } from '@angular/core/testing';

import { LightStateService } from './light-state-service.service';

describe('LightStateServiceService', () => {
  let service: LightStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
