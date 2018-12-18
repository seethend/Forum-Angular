import { Topic } from './topic.model';
import { Subject } from 'rxjs';

export class TopicService {
    topics: Topic[] = [
        new Topic('121', 'General Analog Clock Example to ui Example - help', 'general', new Date(), '154', `
        I was interested in making a type of world display in ui. Of course a digital version not so challenging esp.
        with the new update method for custom views. I statered butchering omz's analog Example to get it to draw inside
         a custom ui.View class. I just don't understand the math well enough. I know basic for some, just not me. I am just
         guessing at the transformations I have to do. One thing I also should have done was use an ImageContext, I was getting to that.
        Anyway, I thought maybe a member here a little bored on a Sunday with a few mins :) might be interested in doing the
        conversion properly. Maybe add a few properties for some of the colours/fonts etc...
        I think if it can be written nice and clean to PEP8 @omz might consider adding it to his examples as it would show the use
        of the new update method, imagecontexts, custom drawing.
        Besides that we get a neat Analog Clock class we can use. Anyway, was just an idea`),
        new Topic('123', 'O2 Analog Clock Example to ui Example - help', 'option2', new Date(), '154', `I was interested in making a
        type of world display in ui. Of course a digital version not so challenging esp. with the new update method for custom views.
        I statered butchering omz's analog Example to get it to draw inside a custom ui.View class. I just don't understand the math
         well enough. I know basic for some, just not me. I am just guessing at the transformations I have to do. One thing I also
          should have done was use an ImageContext, I was getting to that.
        Anyway, I thought maybe a member here a little bored on a Sunday with a few mins :) might be interested in doing the
         conversion properly. Maybe add a few properties for some of the colours/fonts etc...
        I think if it can be written nice and clean to PEP8 @omz might consider adding it to his examples as it would show the
         use of the new update method, imagecontexts, custom drawing.
        Besides that we get a neat Analog Clock class we can use. Anyway, was just an idea`),
    ];

    singleTopic: Topic;
    topicsByType: Topic[] = [];
    topicAdded = new Subject<Topic[]>();

    getAllTopics() {
        return this.topics.slice();
    }

    addTopic(topic: Topic) {
        this.topics.push(topic);
        this.topicAdded.next(this.topics.slice());
    }

    getTopicById(topicId: string) {
        for (const topic of this.topics) {
            if (topic.topicId === topicId) {
                this.singleTopic = topic;
            }
        }
        return this.singleTopic;
    }

    getAllTopicsByType(topicType: string) {
      this.topicsByType = [];
      for (const topic of this.topics) {
            if  (topic.topicType === topicType) {
                this.topicsByType.push(topic);
            }
        }
        return this.topicsByType.slice();
    }

    getAllTags() {
        const tagsList = new Set<string>();
        for (const topic of this.topics) {
            tagsList.add(topic.topicType);
        }
        return tagsList;
    }
}