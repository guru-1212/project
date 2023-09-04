import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponentComponent } from './games-component.component';

describe('GamesComponentComponent', () => {
  let component: GamesComponentComponent;
  let fixture: ComponentFixture<GamesComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamesComponentComponent]
    });
    fixture = TestBed.createComponent(GamesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
