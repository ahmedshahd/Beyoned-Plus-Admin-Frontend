import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineOfBusinessListComponent } from './line-of-business-list.component';

describe('LineOfBusinessListComponent', () => {
  let component: LineOfBusinessListComponent;
  let fixture: ComponentFixture<LineOfBusinessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineOfBusinessListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineOfBusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
