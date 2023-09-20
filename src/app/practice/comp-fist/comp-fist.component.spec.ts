import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFistComponent } from './comp-fist.component';

describe('CompFistComponent', () => {
  let component: CompFistComponent;
  let fixture: ComponentFixture<CompFistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompFistComponent]
    });
    fixture = TestBed.createComponent(CompFistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
