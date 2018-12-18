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
  topicTags = new Set<string>();

  topicSubscription: Subscription;
  selectedTopicType = 'general';
  constructor(private topicService: TopicService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Gets all topics based on topic tag in url
    this.route.params.subscribe(
      (params: Params) => {
        this.selectedTopicType = params['topic'];
        this.topics = this.topicService.getAllTopicsByType(this.selectedTopicType);
      }
    );
    this.topics = this.topicService.getAllTopicsByType(this.selectedTopicType); // By default general is selected on first visit to page
    this.topicTags = this.topicService.getAllTags(); // gets all tags to populate dropdown
  }

  // redirect the application when user clicks on topic by appending topic id
  showSelectedTopics(selectedValue: string) {
    console.log('Selected Option ' + selectedValue);
    this.router.navigate(['../', selectedValue], {relativeTo: this.route});
  }

  // Return tag name capitalizing first letter for dropdown
  getTagNameToDisplay(tag: string ) {
    return tag.substring(0, 1).toUpperCase() + tag.substring(1, tag.length);
  }

}
