import { TestBed } from '@angular/core/testing';

import { VssService } from './vss.service';

describe('VssService', () => {
  let service: VssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
