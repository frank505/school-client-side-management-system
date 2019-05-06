import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserschemeofworksessionComponent } from './userschemeofworksession.component';

describe('UserschemeofworksessionComponent', () => {
  let component: UserschemeofworksessionComponent;
  let fixture: ComponentFixture<UserschemeofworksessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserschemeofworksessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserschemeofworksessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
