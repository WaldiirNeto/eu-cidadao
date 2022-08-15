import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateEmployeesComponent } from './modal-create-employees.component';

describe('ModalCreateEmployeesComponent', () => {
  let component: ModalCreateEmployeesComponent;
  let fixture: ComponentFixture<ModalCreateEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
