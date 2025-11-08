import { TestBed } from '@angular/core/testing';

import { PninfosysService } from './pninfosys.service';

describe('PninfosysService', () => {
  let service: PninfosysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PninfosysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
