import { ApiService } from './../service/api.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],

})
export class ApiComponent implements OnInit {
  newsdata: any; /* varibale to store data */
  errorMessage!: string;
  msg: any;
  showdiv!: boolean;
  ids: any;
  errMsg: any;
  data: any;
  tid: any;

  constructor(private router: Router,private ApiService: ApiService)
  {} /* injecting service in constructor() */

  ngOnInit(): void {
    /*  getting in this.ngOnInit() get wala kaam is ka andar hoga */
    this.ApiService.news_data().subscribe((result: any) => {
      /*  new_data() is the function that we have used
  in service to get data */

      /*  console.log(result)    /*  "to check weather data is coming in console" */
      this.newsdata = Array(result);
      this.data = result;
      /*  converting data in arry,in this api the data is
 coming injson object of type sarray so no need to convert into arry    */

      console.log(this.newsdata),
         /*  data in array */

      /* getting terminsl id */
      this.tid = this.newsdata.filter((result: any) => result.terminalId);
    });
  }

  delete1(id: any) {
    console.log(id);
    this.ApiService.delete_record(id).subscribe((result) => {
      console.log(result);
      this.msg = JSON.stringify(result);
    });
  }
  ok(id: any) {
    this.showdiv = true;
    this.ids = id;

    /*  this.router.navigate(['/update',id]); */
  }
  regester() {
    this.router.navigate(['/regester-terminal']);
  }
  logout() {
    this.router.navigate(['']);
  }

  filtering(tid: any) {
    var id1 = tid.value;
    console.log(id1);
    /*  console.log(this.newsdata.filter((result:any)=>(id1==='select terminal id'?result:result.terminalId==id1))) */

    this.data = this.newsdata.filter((result: any) =>id1 != 'select terminal id' ? result.terminalId == id1 : true
    );
  }
}
function subscribe(arg0: (result: any) => void): any {
  throw new Error('Function not implemented.');
}

function result(value: unknown, index: number): value is unknown {
  throw new Error('Function not implemented.');
}
