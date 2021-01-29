import { TestBed } from '@angular/core/testing';

import { ChunkHandlerService } from './chunk-handler.service';

describe('ChunkHandlerService', () => {
  let service: ChunkHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChunkHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
