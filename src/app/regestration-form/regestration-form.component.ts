import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { concat, from, of } from 'rxjs';

@Component({

  selector: 'app-regestration-form',
  templateUrl: './regestration-form.component.html',
  styleUrls: ['./regestration-form.component.css']
})
export class RegestrationFormComponent implements OnInit {
  regesterform: any;
  submitted! :  boolean;
  isAuthenticated!: boolean;
  date:any;
  st!:boolean;
  msg:any;
  showdiv!:boolean;




  constructor(private formbuilder:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.regesterform = this.formbuilder.group({
      uname:['',[Validators.required,Validators.pattern('^[a-zA-Z#@$&*_-]*$')]],
      pass :['',Validators.required],
      city:['',Validators.required],
      date:['',[Validators.required,/* checkDate */]],
      gender:['M',[Validators.required]]
    });



  }
  get f(){
    return this.regesterform.controls;
  }

 /*  Aunthetication of username and password */
  auntheticate(form:FormGroup){

    console.log(this.regesterform.value)
    var currentDate = new Date();
    var givenDate = new Date(this.f.date.value);

    console.log(currentDate);
  console.log(givenDate);
  if (givenDate>currentDate) {
    console.log("true")
    this.showdiv=false;
    this.submitted=true;
    if(this.f.uname.value === "admin" && this.f.pass.value === "admin" && this.showdiv==false){
      this.isAuthenticated=true;
        this.router.navigate(['/display']);

    }
    else{
      this.isAuthenticated=false;
    }

  }
  else{
    console.log("false");
    this.showdiv=true;
    this.msg="Enter a date is less than today's date"
  }
}


}
let o1=of([10,20,30]);
let o2=from([100,200,300]);
let observable =(concat(o1,o2))

console.log("ok")

observable.subscribe(
data=>console.log(data),


)




//  validation for check date; create function outside the class
// function checkDate(control:FormControl){

//   var currentDate = new Date();
//   var givenDate = new Date(control.value)
//   console.log(currentDate);
//   console.log(givenDate);
//   if (givenDate>currentDate) {
//     return null
//   }
//   else {
//     return {
//       dateError: {
//         message: "Enter a date greater than today's date"
//       }
//     };
//   }


// }
