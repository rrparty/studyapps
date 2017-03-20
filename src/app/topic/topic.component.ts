import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() id; //This can't be used when using Router service, as of now!
  topic = {
    id: 1, 
    name: "General Science"
  }
  constructor() { }

  ngOnInit() {
  }

}
