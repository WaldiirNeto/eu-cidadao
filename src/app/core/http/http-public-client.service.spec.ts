import { TestBed } from '@angular/core/testing';

import { HttpPublicClientService } from './http-public-client.service';

describe('HttpPublicClientService', () => {
  let service: HttpPublicClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpPublicClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
