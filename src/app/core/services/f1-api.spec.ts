import { TestBed } from '@angular/core/testing';

import { F1Api } from './f1-api';

describe('F1Api', () => {
  let service: F1Api;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(F1Api);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
