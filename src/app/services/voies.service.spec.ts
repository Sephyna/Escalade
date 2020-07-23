import { TestBed } from '@angular/core/testing';

import { VoiesService } from './voies.service';

describe('VoiesService', () => {
  let service: VoiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
