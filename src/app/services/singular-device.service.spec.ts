import { TestBed } from '@angular/core/testing';

import { SingularDeviceService } from './singular-device.service';

describe('SingularDeviceService', () => {
  let service: SingularDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingularDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
