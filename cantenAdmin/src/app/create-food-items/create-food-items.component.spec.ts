import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodItemsComponent } from './create-food-items.component';

describe('CreateFoodItemsComponent', () => {
  let component: CreateFoodItemsComponent;
  let fixture: ComponentFixture<CreateFoodItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFoodItemsComponent]
    });
    fixture = TestBed.createComponent(CreateFoodItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
