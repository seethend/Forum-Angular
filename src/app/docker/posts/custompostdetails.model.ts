import { Post } from './posts.model';
export class CustomPostDetails {
  constructor (
              public post: Post,
              public emotionId: number,
              public userEmotionType: string,
              public postImageId: number,
              public postImagePath: string
              ) {}
}
