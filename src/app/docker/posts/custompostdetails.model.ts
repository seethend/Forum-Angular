import { Post } from './posts.model';
export class CustomPostDetails {
  constructor (
              public post: Post,
              public userEmotionType: string,
              public postImagePath: string
              ) {}
}
