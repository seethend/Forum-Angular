import { Topic } from './topic.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticateService } from '../../authenticate/authenticate.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TopicService {

    constructor(private http: HttpClient, private authService: AuthenticateService) {}

    topicsAPI = 'v1/secured/topics/';

    topics: Topic[] = [];

    singleTopic: Topic;
    topicsByType: Topic[] = []; // Stores topic by type

    topicsFetched = new Subject<boolean>();
    singleTopicFetched = new Subject<Topic>();

    isTopicsLoaded = false;


    // Gets all the topics
    getAllTopics() {
        // return this.topics.slice();
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
        this.http.get(this.topicsAPI + 'all', {headers: httpHeaders}).subscribe(
            (topics: Topic[]) => {
                this.topics = topics;
                this.topicsFetched.next(true);
                this.isTopicsLoaded = true;
            },
            error => {
                console.log(error);
                this.topicsFetched.next(false);
                this.isTopicsLoaded = true;
                this.authService.logout();
            }
        );
    }

    // Adds new topic to all topics list
    addTopic(topic: Topic) {
        // this.topics.push(topic);
        topic.topicByUserId = this.authService.getLoggeduser().username;
        console.log(topic);
        const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});

        this.http.post(this.topicsAPI + 'save', topic, {headers: httpHeaders}).subscribe(
            (gotTopic: Topic) => {
                alert('posted topic with id ' + gotTopic.topicId);
                this.isTopicsLoaded = false;
                this.getAllTopics();
            },
            error => {
                console.log(error);
                this.authService.logout();
            }
        );
    }

    // Returns single topic based on Id
    getTopicById(topicId: string) {
      for (const topic of this.topics) {
          if (topic.topicId.toString() === topicId) {
              this.singleTopic = topic;
          }
      }
      return this.singleTopic;
    }

    getTopicFromAPI(topicId: string) {
      const httpHeaders = new HttpHeaders({'Authorization' : this.authService.token});
      return this.http.get(this.topicsAPI + 'topic/' + topicId , {headers: httpHeaders});
    }

    // Returns all topics based on type
    getAllTopicsByType(topicType: string) {
      this.topicsByType = [];
      for (const topic of this.topics) {
            for (const type of topic.topicType) {
                if (type.typeName === topicType) {
                    this.topicsByType.push(topic);
                }
            }
        }
        return this.topicsByType.slice();
    }


    // Returns all topics types
    getAllTags() {
        const tagsList = new Set<string>();
        for (const topic of this.topics) {
            for (const type of topic.topicType) {
                tagsList.add(type.typeName);
            }
        }
        return tagsList;
    }
}
