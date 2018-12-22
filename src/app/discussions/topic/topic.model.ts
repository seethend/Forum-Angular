export class Topic {
    constructor(public topicId: string,
                public topicHeading: string,
                public topicType: {typeId: string, typeName: string}[],
                public topicPostedTime: Date,
                public topicByUserId: string,
                public topicSummary: string) {}
}
