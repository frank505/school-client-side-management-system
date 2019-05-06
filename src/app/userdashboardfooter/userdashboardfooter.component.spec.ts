import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardfooterComponent } from './userdashboardfooter.component';

describe('UserdashboardfooterComponent', () => {
  let component: UserdashboardfooterComponent;
  let fixture: ComponentFixture<UserdashboardfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
