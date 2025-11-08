
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {
  registerForm:any;
  submitted=false;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      Username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      Password:new FormControl('',[Validators.required])



    })
  }
  get registerFormControl(){
    return this.registerForm.controls()
  }
  onSubmit(){
    this.submitted=true

  }

}
