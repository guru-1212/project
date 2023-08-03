import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqureGeneratorComponent } from './squre-generator.component';

describe('SqureGeneratorComponent', () => {
  let component: SqureGeneratorComponent;
  let fixture: ComponentFixture<SqureGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SqureGeneratorComponent]
    });
    fixture = TestBed.createComponent(SqureGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
