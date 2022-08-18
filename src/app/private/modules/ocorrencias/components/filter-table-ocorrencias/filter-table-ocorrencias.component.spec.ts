import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTableOcorrenciasComponent } from './filter-table-ocorrencias.component';

describe('FilterTableOcorrenciasComponent', () => {
  let component: FilterTableOcorrenciasComponent;
  let fixture: ComponentFixture<FilterTableOcorrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTableOcorrenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTableOcorrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
