import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosBarComponent } from './relatorios-bar.component';

describe('RelatoriosBarComponent', () => {
  let component: RelatoriosBarComponent;
  let fixture: ComponentFixture<RelatoriosBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
