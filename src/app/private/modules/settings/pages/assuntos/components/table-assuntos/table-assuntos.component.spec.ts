import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAssuntosComponent } from './table-assuntos.component';

describe('TableAssuntosComponent', () => {
  let component: TableAssuntosComponent;
  let fixture: ComponentFixture<TableAssuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAssuntosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAssuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
