/* tslint:disable:no-unused-variable */

import {
  BaseRequestOptions,
  Response,
  ResponseOptions,
  Http,
  HttpModule
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';
import {
  inject,
  async,
  TestBed
} from '@angular/core/testing';

import { PostService } from './post.service';

describe('MockBackend: TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('returns the PostService',
    async(inject([PostService, MockBackend], (postService: PostService, backend: MockBackend) => {
      backend.connections
        .subscribe((connection: MockConnection) => {
          connection.mockRespond(
            new Response(
              new ResponseOptions({ body: '{"title": "TestPost", "author": "Admin"}' })
            )
          );
        });

      return postService.getPost()
        .then((data) => {
          expect(data).toEqual({'title': 'TestPost', 'author': 'Admin'});
        });
    }))
  );
});
