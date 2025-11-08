import { Component, OnInit } from '@angular/core';
import {of, Observable, pipe, concat, from } from 'rxjs';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
d=[1,2,3,5]
  title = 'basic_angular';
  name='child component ';
  students:any[]=[
    {id:1,name:'vikas',email:'jain@gmail.com',address:'gwalior'},
    {id:2,name:'viki',email:'jain12@gmail.com',address:'bhind'},
    {id:3,name:'ram',email:'ram@gmail.com',address:'etawah'},
    {id:4,name:'raj',email:'jain@gmail.com',address:'delhi'}
  ];
  items=['item1','item2','item3'];

  additem(newitem:string){
    this.items.push(newitem);



  }







}
