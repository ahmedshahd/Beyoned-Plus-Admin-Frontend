import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnIconListComponent } from './learn-icon-list.component';

describe('LearnIconListComponent', () => {
  let component: LearnIconListComponent;
  let fixture: ComponentFixture<LearnIconListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnIconListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
