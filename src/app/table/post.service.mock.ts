import { PostService } from './post.service';
import { Observable } from 'rxjs';

export class MockPostService extends PostService {
  public getPost(): any {
    return Observable
      .fromPromise(Promise.resolve({'title': 'TestPost', 'author': 'Admin'}))
      .toPromise();
  }
}
