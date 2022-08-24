import { TestBed } from '@angular/core/testing'

import { CityService } from './city.service'

describe('CidadeService', () => {
  let service: CityService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CityService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
