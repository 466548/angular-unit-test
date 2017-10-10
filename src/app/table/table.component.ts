import { Component, OnInit, Input } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'app-table',
  template: `
  <table>
    <thead>
      <tr>
        <th>Post Title</th>
        <th>Post Author</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>{{ post.title }}</td>
        <td>{{ post.author }}</td>
      </tr>
    </tbody>
  </table>
  `
})

export class TableComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit() { }
}
