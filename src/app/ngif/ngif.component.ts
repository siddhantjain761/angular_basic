import { PninfosysService } from './../service/pninfosys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  data:any
  n:any;
  tool:"angjs" |  any;


  d:any[]=["ram","vikas","raj"]

  constructor(private pnservice:PninfosysService) {
    this.tool="nodejs"
    this.changetool()
  }

  ngOnInit(): void {

    this.data=this.pnservice.students

    console.log(this.data)
    this.tool="vue js"

  }
  changetool(){
    this.tool="reactjs"
  }
  name=''
  show=true;
  department='it';
  e:string="john";

  s=true
  filter(name:any){
    console.log(name.value)
    var f=name.value;
    console.log(f)
    /* if(f=="select category"){
      console.log("ok")
      this.data=this.pnservice.students

    }
    else{
      this.data=this.pnservice.students.filter((result)=>(f!="select category"?result.name===f:this.pnservice.students));
    } */
    this.data=this.pnservice.students.filter((result)=>(f!="select category"?result.name===f:this.pnservice.students));





    console.log(this.data)

  }





}
