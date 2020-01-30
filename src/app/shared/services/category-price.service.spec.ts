import { TestBed } from '@angular/core/testing';

import { CategoryPriceService } from './category-price.service';

describe('CategoryPriceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryPriceService = TestBed.get(CategoryPriceService);
    expect(service).toBeTruthy();
  });
});
