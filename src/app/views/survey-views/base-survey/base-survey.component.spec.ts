import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSurveyComponent } from './base-survey.component';

describe('BaseSurveyComponent', () => {
  let component: BaseSurveyComponent;
  let fixture: ComponentFixture<BaseSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
