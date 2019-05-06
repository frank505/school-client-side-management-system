
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UsernavbarComponent } from './usernavbar.component';

describe('UsernavbarComponent', () => {
  let component: UsernavbarComponent;
  let fixture: ComponentFixture<UsernavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [UsernavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
