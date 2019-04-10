import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../models/users/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private loggedIn: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

}
