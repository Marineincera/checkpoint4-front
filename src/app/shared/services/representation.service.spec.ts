import { TestBed } from '@angular/core/testing';

import { RepresentationService } from './representation.service';

describe('RepresentationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepresentationService = TestBed.get(RepresentationService);
    expect(service).toBeTruthy();
  });
});
