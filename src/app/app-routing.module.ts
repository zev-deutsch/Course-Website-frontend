import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/users/login/login.component';
import { RegisterComponent } from './views/users/register/register.component';
import {RegisterSuccessComponent} from './views/users/register-success/register-success.component';
import {AssignmentsComponent} from './views/assignments/assignments/assignments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'register_success', component: RegisterSuccessComponent },
  { path: 'assignments', component: AssignmentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
