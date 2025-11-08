import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template:"hello",
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }
  bool:boolean=true;
  coursecolor:string='red';
  borderStyle:string='2px solid blue';
  a=[[1,2,3],[1,2]]

  ngOnInit(): void {
  }
name='raj'
}
