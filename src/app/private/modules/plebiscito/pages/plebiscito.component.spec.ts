import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlebiscitoComponent } from './plebiscito.component';

describe('PlebiscitoComponent', () => {
  let component: PlebiscitoComponent;
  let fixture: ComponentFixture<PlebiscitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlebiscitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlebiscitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
