import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { User} from '../../../models/users/user';
import {AuthService} from '../../../models/users/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    console.log(this.loginForm.value);
    // Set isSubmitted to true
    this.isSubmitted = true;

    // If there are errors don't continue to process form
    if (this.loginForm.invalid) {
      return;
    }

    // Process form
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl(''); // TODO change
  }

}


