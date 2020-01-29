import { TestBed } from '@angular/core/testing';

import { WshelperService } from './wshelper.service';

describe('WshelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WshelperService = TestBed.get(WshelperService);
    expect(service).toBeTruthy();
  });
});
