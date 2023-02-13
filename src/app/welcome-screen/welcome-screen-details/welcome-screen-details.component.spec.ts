import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenDetailsComponent } from './welcome-screen-details.component';

describe('WelcomeScreenDetailsComponent', () => {
  let component: WelcomeScreenDetailsComponent;
  let fixture: ComponentFixture<WelcomeScreenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScreenDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScreenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
