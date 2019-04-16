import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../../models/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted = false;
  accountType: 'teacher' | 'student';
  returnedId: number;

  constructor(private dataService: DataService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      accountType: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.registerForm.controls; }

  submitRegistration() {

    // Set isSubmitted to true
    this.isSubmitted = true;

    // If there are errors don't continue to process form
    if (this.registerForm.invalid) {
      return;
    }

    this.accountType = this.registerForm.value.accountType;

    // Process form
    this.dataService.register(this.registerForm.value.accountType, this.registerForm.value.name, this.registerForm.value.password).subscribe(
      (res) => {
        if (res.id) {
          this.returnedId = res.id;
        }
    });
  }

}
