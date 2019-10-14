import { Post } from '../posts/posts.model';
export class PostEmotions {
  constructor(
                public emotionId: number,
                public emotionByUser: number,
                public emotionForPost: number,
                public emotionType: string,
                public emotionFeltOn: number
  ) {}
}
