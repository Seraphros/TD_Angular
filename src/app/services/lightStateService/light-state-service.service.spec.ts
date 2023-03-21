import { TestBed } from '@angular/core/testing';

import { LightStateServiceService } from './light-state-service.service';

describe('LightStateServiceService', () => {
  let service: LightStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
