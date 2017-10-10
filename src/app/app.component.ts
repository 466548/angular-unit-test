import { Component } from '@angular/core';

import { Post } from './table/post';
import { PostService } from './table/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDataLoaded = false;

  post: Post;

  constructor(private postService: PostService){ }

  ngOnInit(): void {
    this.postService.getPost()
    .then((post: Post) => {
      this.post = new Post(post);
      this.isDataLoaded = true;
    });
  }
}
