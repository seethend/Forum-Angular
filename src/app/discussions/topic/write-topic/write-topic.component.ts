import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-write-topic',
  templateUrl: './write-topic.component.html',
  styleUrls: ['./write-topic.component.css']
})
export class WriteTopicComponent implements OnInit {

    @ViewChild("topicTagsList")
    topicTagsList: ElementRef;

    topicTitleInput = '';
    topicBodyInput = '';
    topicTagInput = '';

    isTopicTitleInputNull = false;
    isTopicBodyInputNull = false;
    isTopicTagInputNull = false;

    allTopicTagOptions = [];
    selectedTopicTags = [];


    constructor(private topicService: TopicService) { }

    ngOnInit() {
    }

    showAllTopicTagsMatches() {
        this.allTopicTagOptions = [];
        if (this.topicTagInput.length > 2) {
            this.topicTagsList.nativeElement.style.display = 'block';
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
        }
        else{
            this.topicTagsList.nativeElement.style.display = 'none';
        }
    }

    selectCurrentTag(topicTag){
        if(this.selectedTopicTags.indexOf(topicTag) < 0){
            this.selectedTopicTags.push(topicTag);
        }
        this.topicTagInput = '';
        document.getElementById('topic-tags').focus();
        this.showAllTopicTagsMatches()
        this.checkTopicTagInputField()
        // console.log(this.selectedTopicTags)
    }

    deleteSelectedTag(selectedCurrentTag){
        const index = this.selectedTopicTags.indexOf(selectedCurrentTag, 0);
        if (index > -1) {
            this.selectedTopicTags.splice(index, 1);
        }
        this.checkTopicTagInputField()
        // console.log(selectedCurrentTag, this.selectedTopicTags)
    }

    checkTopicTagInputField(){
        if(this.selectedTopicTags.length > 0){
            this.isTopicTagInputNull = false;
        }
        else{
            this.isTopicTagInputNull = true;
        }
    }

    saveTopic(){
        if(this.topicTitleInput.length != null && this.topicTitleInput.length > 0){
            this.isTopicTitleInputNull = false;

            if(this.topicBodyInput.length != null && this.topicBodyInput.length > 0){
                this.isTopicBodyInputNull = false;

                if(this.selectedTopicTags.length > 0){
                    this.isTopicTagInputNull = false;
                    
                    console.log(this.topicTitleInput, this.topicBodyInput, this.selectedTopicTags)
                }
                else{
                    this.isTopicTagInputNull = true;
                }           
            }
            else{
                this.isTopicBodyInputNull = true;
            }         
        }
        else{
            this.isTopicTitleInputNull = true;
        }
    }

}