import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPercentageCalculatorComponent } from './discount-percentage-calculator.component';

describe('DiscountPercentageCalculatorComponent', () => {
  let component: DiscountPercentageCalculatorComponent;
  let fixture: ComponentFixture<DiscountPercentageCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscountPercentageCalculatorComponent]
    });
    fixture = TestBed.createComponent(DiscountPercentageCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
