import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdditionDialogComponent } from './users-addition-dialog.component';

describe('UsersAdditionDialogComponent', () => {
  let component: UsersAdditionDialogComponent;
  let fixture: ComponentFixture<UsersAdditionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersAdditionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdditionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
