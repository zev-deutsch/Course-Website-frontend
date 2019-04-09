import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/users/login/login.component';
import {RegisterSuccessComponent} from './views/users/register-success/register-success.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register_success', component: RegisterSuccessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
