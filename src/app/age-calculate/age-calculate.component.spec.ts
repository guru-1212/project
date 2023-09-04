import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCalculateComponent } from './age-calculate.component';

describe('AgeCalculateComponent', () => {
  let component: AgeCalculateComponent;
  let fixture: ComponentFixture<AgeCalculateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgeCalculateComponent]
    });
    fixture = TestBed.createComponent(AgeCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
