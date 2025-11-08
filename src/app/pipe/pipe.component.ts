import { PninfosysService } from './../service/pninfosys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor(private pnservice:PninfosysService) {     /* injecting service in constructor() */

   }

  ngOnInit(): void {
    this.name=this.pnservice.name  /*  getting in this.ngOnInit() get wala kaam is ka andar hoga */
    this.student=this.pnservice.students
  }
  student:any;
  name='';
  mydate = new Date(2000,6,23);
  mycurrency = 9568;

}
