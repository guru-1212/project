import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeGeneratorComponent } from './cube-generator.component';

describe('CubeGeneratorComponent', () => {
  let component: CubeGeneratorComponent;
  let fixture: ComponentFixture<CubeGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CubeGeneratorComponent]
    });
    fixture = TestBed.createComponent(CubeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
