import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayProposalsComponent } from './day-proposals.component';

describe('DayProposalsComponent', () => {
  let component: DayProposalsComponent;
  let fixture: ComponentFixture<DayProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
