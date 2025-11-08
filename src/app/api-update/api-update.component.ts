import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../service/api.service';


@Component({
  selector: 'app-api-update',
  templateUrl: './api-update.component.html',
  styleUrls: ['./api-update.component.css']
})
export class ApiUpdateComponent implements OnInit {
  regesterform:any;
  submitted! :  boolean;
  /* id:any; */
  msg:any;


 id: any ;

  constructor(private activerouter:ActivatedRoute,private apiservice:ApiService,private formbuilder:FormBuilder,) { }




  ngOnInit(): void {
    /* this.id = this.activerouter.snapshot.paramMap.get('id'); */
    this.regesterform=this.formbuilder.group({
      terminalId:['',Validators.required],

      capacity:['',[Validators.required,Validators.minLength(3)]],

    });
  }
  get f(){
    return this.regesterform.controls;
  }
  submit(){     /*  submit is the function that we have used in our form to submt data */
    console.log(this.regesterform.value) /*  to check data that on submiting
    the form the data is coming in console */
    this.apiservice.update_data(this.regesterform.value).subscribe((result)=>{
      console.log(JSON.stringify(result));
      this.msg=JSON.stringify(result);
    });
    this.regesterform.reset({})

  }
  goBack() {
    window.history.back();
  }

//geting value from api component
@Input()
set apiResponse(value: any) {
  this.id = value;
  console.log(value);
  // do whatever else you want to do here
}

}


