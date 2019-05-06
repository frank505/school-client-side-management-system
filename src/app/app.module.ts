import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpService  } from '../app/services/http.service';
import { UserdashboardhomeComponent } from './userdashboardhome/userdashboardhome.component';
import { UserdashboardfooterComponent } from './userdashboardfooter/userdashboardfooter.component';
import { AuthGaurdUserService as UserAuth } from '../app/services/auth-gaurd-user.service';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SchemeofworkComponent } from './schemeofwork/schemeofwork.component';
import { UserschemeofworkcourseComponent } from './userschemeofworkcourse/userschemeofworkcourse.component';
import { StudentsdashboardtopicComponent } from './studentsdashboardtopic/studentsdashboardtopic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,  MatToolbarModule,
   MatSidenavModule, MatListModule,MatInputModule,MatDialogModule,MatProgressBarModule,MatBottomSheetModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { UsernavbarComponent } from './usernavbar/usernavbar.component';
import { UserschemeofworksessionComponent } from './userschemeofworksession/userschemeofworksession.component';


const UserAppRoutes:Routes = [
{path:'', component:HomeComponent},
{path :'about', component: AboutComponent},
{path: 'gallery',component:GalleryComponent},
{path: 'calendar',component:CalendarComponent},
{path:'login', component:LoginComponent},
{path:'blog', component:BlogComponent},
{path:'parent-login', component:ParentLoginComponent},


{ path: 'student-dashboard',component:UserdashboardhomeComponent, canActivate: [UserAuth], children: [
{path:"profile", component:StudentprofileComponent, canActivate:[UserAuth] },
{path:"reset-password", component:ResetPasswordComponent, canActivate:[UserAuth] },
{path:"scheme-of-work", component:SchemeofworkComponent, canActivate:[UserAuth]},
{path:"class-course/:id", component:UserschemeofworkcourseComponent, canActivate:[UserAuth]},
{path:"course-sessions/:class_id/:course_id", component:UserschemeofworksessionComponent , canActivate:[UserAuth]}, 
{path:"course-topics/:class_id/:course_id/:session_id", component:StudentsdashboardtopicComponent, canActivate:[UserAuth]}, 

] }



]


// { path: 'releases', component: ReleaseListComponent, children: [
//   { path: '', component: NotSelectedComponent },
//   { path: ':id', component: ReleaseDetailsComponent, children: [
//       { path: '', component: NotSelectedComponent },
//       { path: 'rcs', component: RcsListComponent, children: [
//           { path: '', component: NotSelectedComponent },
//           { path: ':id', component: RcsDetailsComponent, children: [
//               { path: '', component: NotSelectedComponent },
//               { path: 'binaries', component: BinaryListComponent }
//           ] }
//       ] }
//   ] }
// ] }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    CalendarComponent,
    LoginComponent,
    BlogComponent,
    FooterComponent,
    ParentLoginComponent,
    UserdashboardhomeComponent,
    UserdashboardfooterComponent,
    StudentprofileComponent,
    ResetPasswordComponent,
    SchemeofworkComponent,
    UserschemeofworkcourseComponent,
    StudentsdashboardtopicComponent,
    DashComponent,
    UsernavbarComponent,
    UserschemeofworksessionComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
   RouterModule.forRoot(UserAppRoutes),
   BrowserAnimationsModule,
   MatGridListModule,
   MatCardModule,
   MatMenuModule,
   MatIconModule,
   MatButtonModule,
   LayoutModule,
   MatToolbarModule,
   MatSidenavModule,
   MatListModule,
   MatInputModule,
   MatDialogModule,
   MatProgressBarModule,
   MatBottomSheetModule,
  ],
  providers: [
    HttpService,
    UserAuth,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
