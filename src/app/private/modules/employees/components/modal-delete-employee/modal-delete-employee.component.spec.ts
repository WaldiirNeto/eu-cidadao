import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteEmployeeComponent } from './modal-delete-employee.component';

describe('ModalDeleteEmployeeComponent', () => {
  let component: ModalDeleteEmployeeComponent;
  let fixture: ComponentFixture<ModalDeleteEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
