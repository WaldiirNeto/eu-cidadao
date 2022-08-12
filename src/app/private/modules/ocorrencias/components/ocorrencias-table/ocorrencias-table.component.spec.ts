import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciasTableComponent } from './ocorrencias-table.component';

describe('OcorrenciasTableComponent', () => {
  let component: OcorrenciasTableComponent;
  let fixture: ComponentFixture<OcorrenciasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcorrenciasTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcorrenciasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
