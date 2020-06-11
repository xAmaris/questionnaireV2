import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyViewformComponent } from './survey-viewform.component';

describe('SurveyViewformComponent', () => {
  let component: SurveyViewformComponent;
  let fixture: ComponentFixture<SurveyViewformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyViewformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyViewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
