import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent implements OnInit {
  type: string = 'student';
  id: number = 1002;

  constructor() { }

  ngOnInit() {
  }

}
