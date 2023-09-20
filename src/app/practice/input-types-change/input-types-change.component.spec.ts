import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTypesChangeComponent } from './input-types-change.component';

describe('InputTypesChangeComponent', () => {
  let component: InputTypesChangeComponent;
  let fixture: ComponentFixture<InputTypesChangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTypesChangeComponent]
    });
    fixture = TestBed.createComponent(InputTypesChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
