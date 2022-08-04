import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticsOcorrenciasComponent } from './statics-ocorrencias.component';

describe('StaticsOcorrenciasComponent', () => {
  let component: StaticsOcorrenciasComponent;
  let fixture: ComponentFixture<StaticsOcorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticsOcorrenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticsOcorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
