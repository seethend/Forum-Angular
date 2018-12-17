import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-write-topic',
  templateUrl: './write-topic.component.html',
  styleUrls: ['./write-topic.component.css']
})
export class WriteTopicComponent implements OnInit {

    topicTagInput = '';
    topicTagOptions = [];

    constructor(private topicService: TopicService) { }

    ngOnInit() {
    }

    showAllTopicTagsMatches() {
        this.topicTagOptions = [];
        if (this.topicTagInput.length > 2) {
            const topicTags = this.topicService.getAllTags();
            // console.log(topicTags, this.topicTag);
            for (const tag of topicTags) {
                let tagMatches = [];
                tagMatches = tag.match(this.topicTagInput);
                if (tagMatches != null && tagMatches.length > 0) {
                    this.topicTagOptions.push(tag);
                }
            }
        }
    }

}
