import { Component, OnInit } from '@angular/core';
import { Topic } from '../../topic.model';
import { TopicService } from '../../topic.service';
import { Subscription } from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: Topic[] = [];
  topicSubscription: Subscription;
  selectedTopicType = 'general';
  constructor(private topicService: TopicService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedTopicType = params['topic'];
        this.topics = this.topicService.getAllTopicsByType(this.selectedTopicType);
      }
    );
    this.topics = this.topicService.getAllTopicsByType(this.selectedTopicType);
  }

  showSelectedTopics(selectedValue: string) {
    console.log('Selected Option ' + selectedValue);
    this.router.navigate(['../', selectedValue], {relativeTo: this.route});
  }

}
