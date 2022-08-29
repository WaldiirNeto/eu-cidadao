import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespacharOcorrenciaComponent } from './despachar-ocorrencia.component';

describe('DespacharOcorrenciaComponent', () => {
  let component: DespacharOcorrenciaComponent;
  let fixture: ComponentFixture<DespacharOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DespacharOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespacharOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
