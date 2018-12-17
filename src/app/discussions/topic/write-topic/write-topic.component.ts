import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-write-topic',
  templateUrl: './write-topic.component.html',
  styleUrls: ['./write-topic.component.css']
})
export class WriteTopicComponent implements OnInit {

  constructor(private topicService: TopicService) { }

  ngOnInit() {
  }

  showAllTopicTagsMatches(){
    let topicTags = this.topicService.getAllTags();
    console.log(topicTags)
  }

}
