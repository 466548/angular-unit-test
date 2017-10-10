import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Component, OnInit, Input } from '@angular/core';

import { HttpModule } from '@angular/http';

import { By } from '@angular/platform-browser';

import { PostService } from './table/post.service';
import { MockPostService } from './table/post.service.mock';

@Component({
  selector: 'test-app',
  template: `<app-root></app-root>`
})
export class TestCmpWrapper {
}

@Component({
  selector: 'app-table',
  template: `<div>{{post}}</div>`
})
export class TestTableCmpWrapper {
  @Input() public post: any;
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TestCmpWrapper,
        TestTableCmpWrapper
      ],
      providers: [
        { provide: PostService, useClass: MockPostService }
      ],
      imports: [
        HttpModule
      ]
    }).compileComponents();
  }));
  describe('check rendering', () => {
    it('if component is rendered', async(() => {
      TestBed.compileComponents().then(() => {
        let fixture = TestBed.createComponent(TestCmpWrapper);
        let componentInstance = fixture.componentInstance;

        fixture.detectChanges();

        let appRoot = fixture.debugElement.query(By.css('app-root')).nativeElement;

        fixture.autoDetectChanges();

        fixture.whenStable().then(() => {
          let appRootAfter = fixture.debugElement.query(By.css('app-root')).nativeElement;
        });
      });
    }));
  });
});
