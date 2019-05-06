import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLoginComponent } from './parent-login.component';

describe('ParentLoginComponent', () => {
  let component: ParentLoginComponent;
  let fixture: ComponentFixture<ParentLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
