import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosTableComponent } from './relatorios-table.component';

describe('RelatoriosTableComponent', () => {
  let component: RelatoriosTableComponent;
  let fixture: ComponentFixture<RelatoriosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
