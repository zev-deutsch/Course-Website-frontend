import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/users/login/login.component';
import { RegisterComponent } from './views/users/register/register.component';
import {RegisterSuccessComponent} from './views/users/register-success/register-success.component';
import {AssignmentsComponent} from './views/assignments/assignments/assignments.component';
import {AnnouncementsComponent} from './views/announcements/announcements/announcements.component';
import {AssignmentComponent} from './views/assignments/assignment/assignment.component';
import {NavbarComponent} from './views/navbar/navbar.component';
import {AnnouncementComponent} from './views/announcements/announcement/announcement.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main', component: NavbarComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'announcements'},
      { path: 'announcements', component: AnnouncementsComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent},
      // TODO remove entire register_success component and give a popup and redirect to login
      { path: 'register_success', component: RegisterSuccessComponent }
    ]
  },

  {
    path: 'student', component: NavbarComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'announcements'},
      { path: 'announcements', component: AnnouncementsComponent},
      { path: 'assignments', component: AssignmentsComponent }
    ]
  },

  {
    path: 'teacher', component: NavbarComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'announcements'},
      { path: 'announcements', component: AnnouncementsComponent},
      { path: 'assignments', component: AssignmentsComponent }
    ]
  },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
