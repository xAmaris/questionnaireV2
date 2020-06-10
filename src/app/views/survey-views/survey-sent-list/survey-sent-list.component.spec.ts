import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySentListComponent } from './survey-sent-list.component';

describe('SurveySentListComponent', () => {
  let component: SurveySentListComponent;
  let fixture: ComponentFixture<SurveySentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
