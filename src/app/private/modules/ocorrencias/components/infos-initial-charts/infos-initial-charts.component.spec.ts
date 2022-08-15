import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosInitialChartsComponent } from './infos-initial-charts.component';

describe('InfosInitialChartsComponent', () => {
  let component: InfosInitialChartsComponent;
  let fixture: ComponentFixture<InfosInitialChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosInitialChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosInitialChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
