import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
   pn:any;  /*  varibale */
  constructor() { }

  ngOnInit(): void {
    this.pn=new FormGroup({            /* creating a objet with name "FormGroup" */
      n:new FormControl('',[Validators.required,Validators.minLength(3)]),   /* validations   */
      e:new FormControl('',[Validators.required,Validators.email]),
      c:new FormControl('',[Validators.required]),
    })
  }
  get f(){
    return this.pn.controls;
  }
  mits(){
    console.log(this.pn.value)
    console.log(this.pn.n.value)
  }

}
