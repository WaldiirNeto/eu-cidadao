import { TestBed } from '@angular/core/testing';

import { AssuntoService } from './assunto.service';

describe('AssuntoService', () => {
  let service: AssuntoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssuntoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
