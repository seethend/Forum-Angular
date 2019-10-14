import { PostEmotions } from './../post-details/postemotions.model';
export class Post {
    constructor(public postId: number,
                public postedByUserId: string,
                public postDetails: string,
                public postCreatedOn: number,
                public postUpdatedOn: number,
                public hasImages: boolean,
                public postEmotions: number) {}
}
