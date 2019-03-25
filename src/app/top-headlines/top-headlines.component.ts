import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  categories = ['United-Kingdom', 'technology', 'health', 'sports', 'science'];
  news: any;
  constructor(private newsService: NewsService) { }

  getCountryNews(): void {
    for (let i = 0; i < this.categories.length; i ++) {
      if (this.categories[i] === 'United-Kingdom') {
        this.newsService.getCountryHeadlines('gb', 4)
          .subscribe((data: {}) => {
            this.news = data;
          });
      }
     /* else {
        this.newsService.getTopicsHeadlines(this.categories[i], 4)
          .subscribe((data: {}) => {
            this.news = data;
          });
      }*/
    }
  }

  ngOnInit() {
    this.getCountryNews();
    console.log(this.news);
  }
}
