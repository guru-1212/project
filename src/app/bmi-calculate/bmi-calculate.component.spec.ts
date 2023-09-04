import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMICalculateComponent } from './bmi-calculate.component';

describe('BMICalculateComponent', () => {
  let component: BMICalculateComponent;
  let fixture: ComponentFixture<BMICalculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BMICalculateComponent]
    });
    fixture = TestBed.createComponent(BMICalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
