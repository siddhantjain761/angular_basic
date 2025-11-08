import { Component, OnInit,Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  @Output() newevent=new EventEmitter<string>();

  additem(value:string){
    this.newevent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
