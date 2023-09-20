import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIPracticeComponent } from './api-practice.component';

describe('APIPracticeComponent', () => {
  let component: APIPracticeComponent;
  let fixture: ComponentFixture<APIPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [APIPracticeComponent]
    });
    fixture = TestBed.createComponent(APIPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
