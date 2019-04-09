import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/users/login/login.component';
<<<<<<< HEAD
import {RegisterComponent} from './views/users/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
=======
import {RegisterSuccessComponent} from './views/users/register-success/register-success.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register_success', component: RegisterSuccessComponent },
>>>>>>> 2012780832c35e0806faae490d81e41e2faf2034
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
