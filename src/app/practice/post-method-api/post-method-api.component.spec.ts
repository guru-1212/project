import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMethodAPIComponent } from './post-method-api.component';

describe('PostMethodAPIComponent', () => {
  let component: PostMethodAPIComponent;
  let fixture: ComponentFixture<PostMethodAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostMethodAPIComponent]
    });
    fixture = TestBed.createComponent(PostMethodAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
