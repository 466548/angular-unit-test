/* tslint:disable:no-unused-variable */

import { Component } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Post } from './post';
import { TableComponent } from './table.component';

import { PostService } from './post.service';
import { MockPostService } from './post.service.mock';

import { By } from '@angular/platform-browser';

@Component({
  selector  : 'test-cmp',
  template  : '<app-table [post]="postMock"></app-table>'
})
class TestCmpWrapper {
  public postMock;
}

describe('TableComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestCmpWrapper,
        TableComponent
      ]
    });
  });

  describe('check rendering', () => {
    it('if component is rendered', async(() => {
      TestBed.compileComponents().then(() => {
        let fixture = TestBed.createComponent(TestCmpWrapper);
        let componentInstance = fixture.componentInstance;

        componentInstance.postMock = new Post({title: 'TestPost', author: 'Admin'});

        fixture.detectChanges();

        let td1 = fixture.debugElement.query(By.css('tr td:nth-child(1)')).nativeElement;
        expect(td1.innerText).toBe('TestPost');
        let td2 = fixture.debugElement.query(By.css('tr td:nth-child(2)')).nativeElement;
        expect(td2.innerText).toBe('Admin');
      });
    }));
  });
});
