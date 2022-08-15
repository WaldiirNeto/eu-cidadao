import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateAssuntoComponent } from './modal-create-assunto.component';

describe('ModalCreateAssuntoComponent', () => {
  let component: ModalCreateAssuntoComponent;
  let fixture: ComponentFixture<ModalCreateAssuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateAssuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreateAssuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
