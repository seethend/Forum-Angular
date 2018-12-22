import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from '../topic.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-topic',
  templateUrl: './write-topic.component.html',
  styleUrls: ['./write-topic.component.css']
})
export class WriteTopicComponent implements OnInit {

    @ViewChild('topicTagsList')
    topicTagsList: ElementRef; // all tags ul li ref

    topicTitleInput = ''; // topic title field two way binding
    topicBodyInput = ''; // topic body field two way binding
    topicTagInput = ''; // topic tag field two way binding

    isTopicTitleInputNull = false; // Check if topic title field is empty
    isTopicBodyInputNull = false; // Check if topic body field is empty
    isTopicTagInputNull = false; // Check if topic tag field is empty

    allTopicTagOptions = []; // stores all matched tags
    selectedTopicTags: {typeId: string, typeName: string}[] = []; // stores all selected tags


    constructor(private topicService: TopicService, private router: Router) { }

    ngOnInit() {
    }

    // Method to get all matched tags
    showAllTopicTagsMatches() {
        this.allTopicTagOptions = [];
        if (this.topicTagInput.length > 2) { // doesn't allow to perform the matching action until atleast 3 letters are entered
            this.topicTagsList.nativeElement.style.display = 'block'; // shows the matched list
            const topicTags = this.topicService.getAllTags();
            // console.log(topicTags, this.topicTag);
            for (const tag of topicTags) {
                let tagMatches = [];
                tagMatches = tag.match(this.topicTagInput);
                if (tagMatches != null && tagMatches.length > 0) {
                    this.allTopicTagOptions.push(tag);
                }
            }
            // console.log(this.allTopicTagOptions);
        } else {
            this.topicTagsList.nativeElement.style.display = 'none'; // hides the matched list
        }
    }

    addTopicTag() {
        let isTagPresent = false;
        for (const topicType of this.selectedTopicTags) {
            if (topicType.typeName === this.topicTagInput) {
                isTagPresent = true;
            }
        }

        if (!isTagPresent) {
            this.selectedTopicTags.push({typeId: null, typeName: this.topicTagInput});
        }

        this.topicTagInput = '';
        document.getElementById('topic-tags').focus();
        this.showAllTopicTagsMatches();
        this.checkTopicTagInputField();
    }

    // Triggers when user selects a particular tag and adds to selectedTopicTags
    selectCurrentTag(topicTag) {
        let isTagPresent = false;
        for (const topicType of this.selectedTopicTags) {
            if (topicType.typeName === topicTag) {
                isTagPresent = true;
            }
        }

        if (!isTagPresent) {
            this.selectedTopicTags.push({typeId: null, typeName: topicTag});
        }

        this.topicTagInput = '';
        document.getElementById('topic-tags').focus();
        this.showAllTopicTagsMatches();
        this.checkTopicTagInputField();
        // console.log(this.selectedTopicTags)
    }

    // delete the tag from selectedTopicTags list
    deleteSelectedTag(selectedCurrentTag) {
        const index = this.selectedTopicTags.indexOf(selectedCurrentTag, 0);
        if (index > -1) {
            this.selectedTopicTags.splice(index, 1);
        }
        this.checkTopicTagInputField();
        // console.log(selectedCurrentTag, this.selectedTopicTags)
    }

    // Check if any tag is selected after every entry and removal
    checkTopicTagInputField() {
        if (this.selectedTopicTags.length > 0) {
            this.isTopicTagInputNull = false;
        } else {
            this.isTopicTagInputNull = true;
        }
    }

    // Saves new topic after checking all the feilds are not empty
    saveTopic() {
        if (this.topicTitleInput.length != null && this.topicTitleInput.length > 0) {
            this.isTopicTitleInputNull = false;

            if (this.topicBodyInput.length != null && this.topicBodyInput.length > 0) {
                this.isTopicBodyInputNull = false;

                if (this.selectedTopicTags.length > 0) {
                    this.isTopicTagInputNull = false;
                    const topic = new Topic(null, this.topicTitleInput, this.selectedTopicTags, new Date(), '1', this.topicBodyInput);
                    console.log(topic);
                    this.topicService.addTopic(topic);
                    this.topicService.topicsFetched.subscribe(
                        (areTopicsLoaded: boolean) => {
                            if (areTopicsLoaded) {
                                this.router.navigate(['/', 'discussions', 'topics', 'general']);
                            } else {
                                console.log('something went wrong while saving topic');
                            }
                        },
                        error => {
                            console.log('something went wrong while saving topic ', error);
                        }
                    );
                    // console.log(this.topicTitleInput, this.topicBodyInput, this.selectedTopicTags);
                } else {
                    this.isTopicTagInputNull = true;
                }
            } else {
                this.isTopicBodyInputNull = true;
            }
        } else {
            this.isTopicTitleInputNull = true;
        }
    }

}
