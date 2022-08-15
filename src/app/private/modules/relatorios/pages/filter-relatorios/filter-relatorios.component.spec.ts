import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRelatoriosComponent } from './filter-relatorios.component';

describe('FilterRelatoriosComponent', () => {
  let component: FilterRelatoriosComponent;
  let fixture: ComponentFixture<FilterRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRelatoriosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
