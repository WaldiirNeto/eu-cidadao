import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalhesOcorrenciaComponent } from './modal-detalhes-ocorrencia.component';

describe('ModalDetalhesOcorrenciaComponent', () => {
  let component: ModalDetalhesOcorrenciaComponent;
  let fixture: ComponentFixture<ModalDetalhesOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetalhesOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetalhesOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
