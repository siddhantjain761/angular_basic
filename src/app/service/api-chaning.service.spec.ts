import { TestBed } from '@angular/core/testing';

import { ApiChaningService } from './api-chaning.service';

describe('ApiChaningService', () => {
  let service: ApiChaningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiChaningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
