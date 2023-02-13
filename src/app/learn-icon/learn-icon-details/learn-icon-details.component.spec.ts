import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIconDetailsComponent } from './learn-icon-details.component';

describe('LearnIconDetailsComponent', () => {
  let component: LearnIconDetailsComponent;
  let fixture: ComponentFixture<LearnIconDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnIconDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIconDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
