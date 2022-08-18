import { TestBed } from '@angular/core/testing';

import { NotifyComponentsService } from './notify-components.service';

describe('NotifyComponentsService', () => {
  let service: NotifyComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
