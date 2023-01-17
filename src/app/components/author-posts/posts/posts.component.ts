import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { AuthorPostsService } from 'src/app/services/author-posts.service';
import { PostData } from 'src/app/models/author-posts';

@Component({
  selector: 'cmp-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  @Output() toUpdatePost = new EventEmitter<{command: string, database: string, post: PostData}>();
  @Output() insidePostEvent = new EventEmitter();

  public postList: PostData[] = [];

  constructor(private authorPostsService: AuthorPostsService) {
  }

  ngOnInit() {
    try {
      this.authorPostsService.postState().subscribe((res) => {
        if(res) {
          this.authorPostsService.fetchPosts().subscribe(data => {
            this.postList = data;
          });
        }
      });
    } catch(err) {
      throw new Error(`Error: ${err}`);
    }
  }
  /**
   * Update a post
   * @param post
   */
  updatePost(postData: PostData) {
    this.insidePostEvent.emit();
    this.toUpdatePost.emit({command: "update", database: this.authorPostsService.databaseName, post: postData});
  }
  /**
   * Delete a post
   * @param post
   */
  async deletePost(postData: PostData) {
    try {
      const post = await this.authorPostsService.getJsonPostFromPostData(postData);
      await this.authorPostsService.deletePost(post);
      await this.authorPostsService.getAllPosts();
      this.toUpdatePost.emit({command: "delete", database: this.authorPostsService.databaseName, post: postData});
    } catch(err) {
      throw new Error(`Error: ${err}`);
    }
  }
}

