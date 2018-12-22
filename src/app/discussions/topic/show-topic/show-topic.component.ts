import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-show-topic',
  templateUrl: './show-topic.component.html',
  styleUrls: ['./show-topic.component.css']
})
export class ShowTopicComponent implements OnInit {

  constructor(private topicService: TopicService) { }
  ngOnInit() {
      this.topicService.getAllTopics();
  }

}
