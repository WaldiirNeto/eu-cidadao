import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotificationsComponent } from './modal-notifications.component';

describe('ModalNotificationsComponent', () => {
  let component: ModalNotificationsComponent;
  let fixture: ComponentFixture<ModalNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
