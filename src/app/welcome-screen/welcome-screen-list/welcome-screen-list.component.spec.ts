import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenListComponent } from './welcome-screen-list.component';

describe('WelcomeScreenListComponent', () => {
  let component: WelcomeScreenListComponent;
  let fixture: ComponentFixture<WelcomeScreenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScreenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScreenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
