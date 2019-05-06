import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsdashboardtopicComponent } from './studentsdashboardtopic.component';

describe('StudentsdashboardtopicComponent', () => {
  let component: StudentsdashboardtopicComponent;
  let fixture: ComponentFixture<StudentsdashboardtopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsdashboardtopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsdashboardtopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
