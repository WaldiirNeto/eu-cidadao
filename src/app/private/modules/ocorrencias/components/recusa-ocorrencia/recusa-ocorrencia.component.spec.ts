import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecusaOcorrenciaComponent } from './recusa-ocorrencia.component';

describe('RecusaOcorrenciaComponent', () => {
  let component: RecusaOcorrenciaComponent;
  let fixture: ComponentFixture<RecusaOcorrenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecusaOcorrenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecusaOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
