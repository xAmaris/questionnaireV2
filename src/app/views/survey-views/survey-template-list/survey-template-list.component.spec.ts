import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyTemplateListComponent } from './survey-template-list.component';

describe('SurveyTemplateListComponent', () => {
  let component: SurveyTemplateListComponent;
  let fixture: ComponentFixture<SurveyTemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyTemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
