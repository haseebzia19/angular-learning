import { TestBed } from '@angular/core/testing';

import { TestingResolverService } from './testing-resolver.service';

describe('TestingResolverService', () => {
  let service: TestingResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestingResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
