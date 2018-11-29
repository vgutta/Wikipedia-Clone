import { TestBed } from '@angular/core/testing';

import { UdPagesService } from './ud-pages.service';

describe('UdPagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UdPagesService = TestBed.get(UdPagesService);
    expect(service).toBeTruthy();
  });
});
