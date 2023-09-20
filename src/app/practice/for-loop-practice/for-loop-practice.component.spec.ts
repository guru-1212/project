import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopPracticeComponent } from './for-loop-practice.component';

describe('ForLoopPracticeComponent', () => {
  let component: ForLoopPracticeComponent;
  let fixture: ComponentFixture<ForLoopPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForLoopPracticeComponent]
    });
    fixture = TestBed.createComponent(ForLoopPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
