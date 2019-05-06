import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserschemeofworkcourseComponent } from './userschemeofworkcourse.component';

describe('UserschemeofworkcourseComponent', () => {
  let component: UserschemeofworkcourseComponent;
  let fixture: ComponentFixture<UserschemeofworkcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserschemeofworkcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserschemeofworkcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
