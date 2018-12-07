export class Topic {
    constructor(public topicId: string,
                public topicHeading: string,
                public topicType: string,
                public topicPostedTime: Date,
                public topicByUserId: string,
                public topicSummary: string) {}
}
