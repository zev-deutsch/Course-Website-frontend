import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent} from './views/users/login/login.component';
import {MatButtonModule, MatIconModule, MatInputModule, MatTabsModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavbarComponent } from './views/navbar/navbar.component';
import {MatListModule, MatToolbarModule} from '@angular/material';
import { RegisterSuccessComponent } from './views/users/register-success/register-success.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
