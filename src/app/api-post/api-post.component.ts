import { Router } from '@angular/router';
import { ApiService } from './../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent implements OnInit {
  regesterform:any;
  submitted! :  boolean;
  msg:any;
  constructor(private apiservice:ApiService,private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.regesterform=this.formbuilder.group({
      terminalId:['',Validators.required],
      avaliableCapicity:['',[Validators.required,Validators.minLength(3)]],
      capacity:['',[Validators.required,Validators.minLength(3)]],
      country:['',Validators.required],
      harborLocation:['',Validators.required],
      itemDescription:['',Validators.required],
      itemType:['',Validators.required],
      status:['',[Validators.required,Validators.pattern('[Avaliable Unavaliable]*')]],
      terminalName:['',Validators.required],
    });
  }
  get f(){
    return this.regesterform.controls;
  }
  submit(){     /*  submit is the function that we have used in our form to submt data */
    console.log(this.regesterform.value) /*  to check data that on submiting
    the form the data is coming in console */

      this.apiservice.insert_data(this.regesterform.value).subscribe((result:any)=>{
      console.log(result);
      this.msg=JSON.stringify(result);


    });
    this.regesterform.reset({})

  }
  goBack() {
    window.history.back();
  }
  logout(){
        this.router.navigate([''])
  }

}
