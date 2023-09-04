import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionGameComponent } from './division-game.component';

describe('DivisionGameComponent', () => {
  let component: DivisionGameComponent;
  let fixture: ComponentFixture<DivisionGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisionGameComponent]
    });
    fixture = TestBed.createComponent(DivisionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
