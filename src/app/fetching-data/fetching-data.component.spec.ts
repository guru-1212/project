import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchingDataComponent } from './fetching-data.component';

describe('FetchingDataComponent', () => {
  let component: FetchingDataComponent;
  let fixture: ComponentFixture<FetchingDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchingDataComponent]
    });
    fixture = TestBed.createComponent(FetchingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
