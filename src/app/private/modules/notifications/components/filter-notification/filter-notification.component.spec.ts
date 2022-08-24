import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNotificationComponent } from './filter-notification.component';

describe('FilterNotificationComponent', () => {
  let component: FilterNotificationComponent;
  let fixture: ComponentFixture<FilterNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
