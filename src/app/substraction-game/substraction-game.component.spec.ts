import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstractionGameComponent } from './substraction-game.component';

describe('SubstractionGameComponent', () => {
  let component: SubstractionGameComponent;
  let fixture: ComponentFixture<SubstractionGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubstractionGameComponent]
    });
    fixture = TestBed.createComponent(SubstractionGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
