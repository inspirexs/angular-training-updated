import { TestBed } from '@angular/core/testing';

import { MercuryClientService } from './mercury-client.service';

describe('MercuryClientService', () => {
  let service: MercuryClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercuryClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
