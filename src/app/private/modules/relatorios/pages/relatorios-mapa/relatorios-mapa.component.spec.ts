import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosMapaComponent } from './relatorios-mapa.component';

describe('RelatoriosMapaComponent', () => {
  let component: RelatoriosMapaComponent;
  let fixture: ComponentFixture<RelatoriosMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosMapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
