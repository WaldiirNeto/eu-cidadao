import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutPermissionComponent } from './without-permission.component';

describe('WithoutPermissionComponent', () => {
  let component: WithoutPermissionComponent;
  let fixture: ComponentFixture<WithoutPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutPermissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
