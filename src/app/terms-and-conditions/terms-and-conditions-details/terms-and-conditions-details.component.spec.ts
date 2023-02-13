import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsDetailsComponent } from './terms-and-conditions-details.component';

describe('TermsAndConditionsDetailsComponent', () => {
  let component: TermsAndConditionsDetailsComponent;
  let fixture: ComponentFixture<TermsAndConditionsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
