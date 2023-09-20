import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStudentComponent } from './next-student.component';

describe('NextStudentComponent', () => {
  let component: NextStudentComponent;
  let fixture: ComponentFixture<NextStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextStudentComponent]
    });
    fixture = TestBed.createComponent(NextStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
