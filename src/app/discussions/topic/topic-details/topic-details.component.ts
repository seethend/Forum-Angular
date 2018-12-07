import { Component, OnInit } from '@angular/core';
import {TopicService} from '../topic.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Topic} from '../topic.model';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {

  topic: Topic;
  topicId: string;

  constructor(private topicService: TopicService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.topicId = params['id'];
        this.topic = this.topicService.getTopicById(this.topicId);
      }
    );
  }

}
