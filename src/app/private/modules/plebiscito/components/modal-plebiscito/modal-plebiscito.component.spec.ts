import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlebiscitoComponent } from './modal-plebiscito.component';

describe('ModalPlebiscitoComponent', () => {
  let component: ModalPlebiscitoComponent;
  let fixture: ComponentFixture<ModalPlebiscitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPlebiscitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPlebiscitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
