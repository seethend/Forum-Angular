import { AuthenticateService } from './../../../authenticate/authenticate.service';
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

  isTopicLoaded = false;

  constructor(private topicService: TopicService, private route: ActivatedRoute, private authService: AuthenticateService) { }

  ngOnInit() {
    // Fires everytime id changes in url and gets new topic based on Id from topicService
    this.route.params.subscribe(
      (params: Params) => {
        this.isTopicLoaded = false;
        this.topicId = params['id'];
        this.topic = this.topicService.getTopicById(this.topicId);
        if (this.topic == null) {
          this.topicService.getTopicFromAPI(this.topicId).subscribe(
            (localTopic: Topic) => {
              this.topic = localTopic;
              this.isTopicLoaded = true;
            },
            error => {
              this.isTopicLoaded = false;
              this.authService.logout();
            }
          );
        } else {
          this.isTopicLoaded = true;
        }
      }
    );
  }

}
