import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOfBusinessDetailsComponent } from './line-of-business-details.component';

describe('LineOfBusinessDetailsComponent', () => {
  let component: LineOfBusinessDetailsComponent;
  let fixture: ComponentFixture<LineOfBusinessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineOfBusinessDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineOfBusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
