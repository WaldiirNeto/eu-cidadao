import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryListBoxComponent } from './category-list-box.component';

describe('CategoryListBoxComponent', () => {
  let component: CategoryListBoxComponent;
  let fixture: ComponentFixture<CategoryListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryListBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
