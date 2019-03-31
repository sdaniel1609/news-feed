import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';

import {Router, NavigationEnd, NavigationStart, Event} from '@angular/router';
import {NewsService} from '../services/news.service';
import {FormControl} from '@angular/forms';
import {DataService} from '../services/data.service';

/** @title Responsive sidenav */
@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css'],
})
export class NavigationComponent implements OnDestroy {

  mobileQuery: MediaQueryList;
  showLoadingIndicator = true;
  searchTerm: string;
  search = [];
  news = new FormControl('');
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,
              private newsService: NewsService,
              private dataService: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
  }

  setData() {
    this.dataService.changeMessage(this.search);
  }

  submitSearch(topic: string): void {
    this.searchTerm = topic;
    this.searchNews();
  }

  searchNews(): void {
    this.newsService.searchNews(this.searchTerm, 20)
      .subscribe(res => {
        this.search = res;
        this.setData();
      });
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
