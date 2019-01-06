export class Post {
    constructor(public postId: number,
                public postedByUserId: string,
                public postDetails: string,
                public postCreatedOn: number,
                public postUpdatedOn: number,
                public hasImages: boolean) {}
}
