import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { User} from '../../../models/users/user';
import {AuthService} from '../../../models/users/auth.service';
import {element} from "protractor";
import {getValue} from "@angular/core/src/render3/styling/class_and_style_bindings";
import {visit} from "@angular/compiler-cli/src/ngtsc/util/src/visitor";
import {visitValue} from "@angular/compiler/src/util";
import {DataService} from '../../../models/data.service';
import {LoggedInfo} from '../../../models/users/LoggedInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  loggedIn: string;
  userObject: User;
  msg: string;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    // this.loggedIn = this.authService.loggedIn();

    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
      accountType: 'student'
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
    this.dataService.login(this.userObject).subscribe(
      (res) => {
        if (res.error) {
          this.msg = res.error;
        } else {
          this.authService.login(res);
          this.router.navigateByUrl(res.accountType);
        }
      }
    );


    // this.authService.login(this.loginForm.value);
    // this.router.navigateByUrl('student');
  }

}


