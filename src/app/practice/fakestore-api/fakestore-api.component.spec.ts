import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakestoreAPIComponent } from './fakestore-api.component';

describe('FakestoreAPIComponent', () => {
  let component: FakestoreAPIComponent;
  let fixture: ComponentFixture<FakestoreAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakestoreAPIComponent]
    });
    fixture = TestBed.createComponent(FakestoreAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
