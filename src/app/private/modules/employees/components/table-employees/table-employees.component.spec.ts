import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TableEmployeesComponent } from './table-employees.component'

describe('TableUsersComponent', () => {
  let component: TableEmployeesComponent
  let fixture: ComponentFixture<TableUsersComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUsersComponent]
    })
      .compileComponents()

    fixture = TestBed.createComponent(TableUsersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
