import { TestBed } from '@angular/core/testing';

import { LongueursService } from './longueurs.service';

describe('LongueursService', () => {
  let service: LongueursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LongueursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
