import { TestBed } from '@angular/core/testing';

import { CategoryPerformanceService } from './category-performance.service';

describe('CategoryPerformanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryPerformanceService = TestBed.get(CategoryPerformanceService);
    expect(service).toBeTruthy();
  });
});
