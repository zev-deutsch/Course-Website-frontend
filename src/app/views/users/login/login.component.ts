import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  userObject: User;
  msg: string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
      accountType: ['student', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {

    // Set isSubmitted to true
    this.isSubmitted = true;

    // If there are errors don't continue to process form
    if (this.loginForm.invalid) {
      return;
    }

    this.userObject = new User(this.loginForm.value);
    console.log(this.userObject);

    // Process form
    this.authService.login(this.userObject).subscribe(
      (res) => {
        if (res.error) {
          this.msg = res.error;
        } else {
          this.authService.loggedIn(res);
          console.log(res.accountType);
          this.router.navigateByUrl(res.accountType);
        }
      }
    );

  }

}


