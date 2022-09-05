import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteNotificationComponent } from './modal-delete-notification.component';

describe('ModalDeleteNotificationComponent', () => {
  let component: ModalDeleteNotificationComponent;
  let fixture: ComponentFixture<ModalDeleteNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDeleteNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
