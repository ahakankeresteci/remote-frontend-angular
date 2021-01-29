import { TestBed } from '@angular/core/testing';

import { JobadService } from './jobad.service';

describe('JobadService', () => {
  let service: JobadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
