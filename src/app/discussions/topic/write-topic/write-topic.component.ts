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

    isTagAlreadyPresent = false; // Check if topic tags are selected twice
    isAddingTagEmpty = false; // Check if topic tag input field is empty before adding new topic

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
                tagMatches = tag.toLowerCase().match(this.topicTagInput.toLowerCase());
                if (tagMatches != null && tagMatches.length > 0) {
                    this.allTopicTagOptions.push(tag); // Making list to show matched list
                    break;
                }
            }
            // console.log(this.allTopicTagOptions);
        } else {
            this.topicTagsList.nativeElement.style.display = 'none'; // hides the matched list
        }
        this.resetTagInputWarnings(); // Resets other warnings signs
    }

    /**
     * Resets empty tag input field signal signs
     */
    resetTagInputWarnings(): any {
      this.isAddingTagEmpty = false;
      this.isTopicTagInputNull = false;
    }

    /**
     * Adds new topic tag from topic tag input field after validating conditions
     * 1. Checks if field is empty
     * 2. Checks if tag is already added
     */
    addTopicTag() {
      // Reseting before checking others
      this.isTagAlreadyPresent = false;
      this.isAddingTagEmpty = false;
      this.isTopicTagInputNull = false;

      if (this.topicTagInput != null && this.topicTagInput.trim().length > 3) {
        for (const topicType of this.selectedTopicTags) {
          if (topicType.typeName.toLowerCase() === this.topicTagInput.toLowerCase()) {
              this.isTagAlreadyPresent = true; // Iterates and finds if tag user wants to add is already added
              break;
          }
        }
      } else {
        if (this.topicTagInput.trim().length === 0) {
          this.isTopicTagInputNull = true; // Checks if tag input field is already empty
        }
        this.isAddingTagEmpty = true; // Checks if tag field value length is less than 3
      }

      // If validation passed add the tag to selected topics list
      if (!this.isTagAlreadyPresent && !this.isTopicTagInputNull && !this.isAddingTagEmpty) {
          this.selectedTopicTags.push({typeId: null, typeName: this.topicTagInput.toLowerCase()});
          // After adding reset all signals for next tag checks
          this.isAddingTagEmpty = false;
          this.isTagAlreadyPresent = false;
          this.isTopicTagInputNull = false;
      }

      this.topicTagInput = '';
      document.getElementById('topic-tags').focus();
    }

    /**
     * Triggers when user selects a particular tag from dropdown matched tags list and adds to selectedTopicTags list
     *
     * @param topicTag
     */
    selectCurrentTag(topicTag) {
      this.isTagAlreadyPresent = false;
      for (const topicType of this.selectedTopicTags) {
          if (topicType.typeName.toLowerCase() === topicTag.toLowerCase()) {
              this.isTagAlreadyPresent = true; // Iterates and finds if tag user wants to add is already added
              break;
          }
      }

      if (!this.isTagAlreadyPresent) {
          this.selectedTopicTags.push({typeId: null, typeName: topicTag.toLowerCase()});
      }

      this.isTopicTagInputNull = false;

      this.topicTagInput = '';
      document.getElementById('topic-tags').focus();
      this.showAllTopicTagsMatches(); // Just to hide the dropdown of matched topic tags
    }

    /**
     * delete the tag from selectedTopicTags list
     * @param selectedCurrentTag
     */
    deleteSelectedTag(selectedCurrentTag) {
      const index = this.selectedTopicTags.indexOf(selectedCurrentTag, 0);
      if (index > -1) {
          this.selectedTopicTags.splice(index, 1);
      }
    }

    /**
     * Saves new topic after checking all the feilds are not empty
     */
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
