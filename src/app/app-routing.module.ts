import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/users/login/login.component';
import { RegisterComponent } from './views/users/register/register.component';
import {AssignmentsComponent} from './views/assignments/assignments/assignments.component';
import {AnnouncementsComponent} from './views/announcements/announcements/announcements.component';
import {NavbarComponent} from './views/navbar/navbar.component';
import {StudentAuthGuard} from './controllers/student-auth.guard';
import {TeacherAuthGuard} from './controllers/teacher-auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main', component: NavbarComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'announcements'},
      { path: 'announcements', component: AnnouncementsComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent},
      { path: '**', redirectTo: 'announcements'}
    ]
  },

  {
    path: 'student', component: NavbarComponent, canActivate: [StudentAuthGuard], canActivateChild: [StudentAuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'announcements'},
      { path: 'announcements', component: AnnouncementsComponent},
      { path: 'assignments', component: AssignmentsComponent },
      { path: '**', redirectTo: 'announcements'}
    ]
  },

  {
    path: 'teacher', component: NavbarComponent, canActivate: [TeacherAuthGuard], canActivateChild: [TeacherAuthGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'announcements'},
      { path: 'announcements', component: AnnouncementsComponent},
      { path: 'assignments', component: AssignmentsComponent },
      { path: '**', redirectTo: 'announcements'}
    ]
  },
  { path: '**', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
