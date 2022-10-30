import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTablePlebiscitoComponent } from './filter-table-plebiscito.component';

describe('FilterTablePlebiscitoComponent', () => {
  let component: FilterTablePlebiscitoComponent;
  let fixture: ComponentFixture<FilterTablePlebiscitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTablePlebiscitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterTablePlebiscitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
