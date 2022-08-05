import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarAssuntosComponent } from './gerenciar-assuntos.component';

describe('GerenciarAssuntosComponent', () => {
  let component: GerenciarAssuntosComponent;
  let fixture: ComponentFixture<GerenciarAssuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarAssuntosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarAssuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
