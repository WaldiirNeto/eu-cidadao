import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosManagerComponent } from './relatorios-manager.component';

describe('RelatoriosManagerComponent', () => {
  let component: RelatoriosManagerComponent;
  let fixture: ComponentFixture<RelatoriosManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriosManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriosManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
