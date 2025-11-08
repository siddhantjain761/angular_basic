import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PninfosysService {

  constructor() { }
  name='siddhant';     /* now inject this component into constructor of pipe.component.ts  */
  students: any[]=[
    {id:1,name:'vikas',email:'jain@gmail.com',address:'gwalior'},
    {id:2,name:'ram',email:'jain12@gmail.com',address:'bhind'},
    {id:3,name:'ram',email:'ram@gmail.com',address:'etawah'},
    {id:4,name:'raj',email:'jain@gmail.com',address:'delhi'},
  ];
}
