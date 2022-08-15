import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxOcorrenciasRecentesComponent } from './box-ocorrencias-recentes.component';

describe('BoxOcorrenciasRecentesComponent', () => {
  let component: BoxOcorrenciasRecentesComponent;
  let fixture: ComponentFixture<BoxOcorrenciasRecentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxOcorrenciasRecentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxOcorrenciasRecentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
