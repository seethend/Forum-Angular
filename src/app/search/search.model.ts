import { Topic } from './../discussions/topic/topic.model';
import { Post } from './../docker/posts/posts.model';
import { User } from './../user-details/user.model';
export class Search {

  constructor (
                public users: User[],
                public posts: Post[],
                public topics: Topic[]
              ) {}

}
