import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeofworkComponent } from './schemeofwork.component';

describe('SchemeofworkComponent', () => {
  let component: SchemeofworkComponent;
  let fixture: ComponentFixture<SchemeofworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemeofworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeofworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
