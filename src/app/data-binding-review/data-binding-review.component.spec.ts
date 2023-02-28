import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingReviewComponent } from './data-binding-review.component';

describe('DataBindingReviewComponent', () => {
  let component: DataBindingReviewComponent;
  let fixture: ComponentFixture<DataBindingReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
