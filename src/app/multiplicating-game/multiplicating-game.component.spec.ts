import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicatingGameComponent } from './multiplicating-game.component';

describe('MultiplicatingGameComponent', () => {
  let component: MultiplicatingGameComponent;
  let fixture: ComponentFixture<MultiplicatingGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicatingGameComponent]
    });
    fixture = TestBed.createComponent(MultiplicatingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
