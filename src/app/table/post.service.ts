import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  public getPost(): any {
    return this.http.get('/assets/post.json')
      .toPromise()
      .then((res: any) => res.json())
      .catch((e: any) => console.error(e));
  }
}
