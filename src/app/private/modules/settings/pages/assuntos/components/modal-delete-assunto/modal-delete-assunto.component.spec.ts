import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteAssuntoComponent } from './modal-delete-assunto.component';

describe('ModalDeleteAssuntoComponent', () => {
  let component: ModalDeleteAssuntoComponent;
  let fixture: ComponentFixture<ModalDeleteAssuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteAssuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
