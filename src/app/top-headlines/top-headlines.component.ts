import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {News} from '../news';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  categories = ['United Kingdom', 'Technology', 'Health', 'Sports', 'Science'];
  news: any;
  constructor(private newsService: NewsService, private http: HttpClient) { }

  getCountryNews(): void {
    this.news = [];
    this.newsService.getCountryHeadlines('gb', 4)
      .subscribe((data: {}) => {
        console.log(data)
        this.news = data;
      });
  }

/*
  getCategoryNews(): void {
    this.news = [];
    this.newsService.getCategoryHeadlines('technology', 20)
      .subscribe((data: {}) => {
        console.log(data)
        this.news = data;
      });
  }
*/

  ngOnInit() {
    this.getCountryNews();
    console.log(this.news);
  }
}
