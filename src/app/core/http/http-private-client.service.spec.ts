import { TestBed } from '@angular/core/testing'

import HttpPrivateClientService from './http-private-client.service'

describe('HttpPrivateClientService', () => {
  let service: HttpPrivateClientService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(HttpPrivateClientService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
