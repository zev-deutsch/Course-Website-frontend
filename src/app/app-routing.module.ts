import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/users/login/login.component';
import { RegisterComponent } from './views/users/register/register.component';
import {RegisterSuccessComponent} from './views/users/register-success/register-success.component';
import {AssignmentsComponent} from './views/assignments/assignments/assignments.component';
import {AnnouncementsComponent} from './views/announcements/announcements/announcements.component';
import {AssignmentComponent} from './views/assignments/assignment/assignment.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'announcements'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'register_success', component: RegisterSuccessComponent },
  { path: 'assignments', component: AssignmentsComponent },
  // just for debugging
  { path: 'assignment', component: AssignmentComponent },
  { path: 'announcements', component: AnnouncementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
