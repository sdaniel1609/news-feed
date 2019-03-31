import {Component, OnChanges, OnInit} from '@angular/core';
import {NewsService} from '../services/news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})

export class TopicsComponent implements OnInit {
  news: any;
  category: string;

  constructor(public newsService: NewsService,
  public route: ActivatedRoute) {}

  getNews(): void {
    this.category = this.route.snapshot.url[0].path;
    if (this.category === 'united-kingdom') {
      this.newsService.getCountryHeadlines('gb', 20)
        .subscribe((data: {}) => {
          this.news = data;
        });
    } else {
      this.newsService.getTopicsHeadlines(this.category, 20)
        .subscribe((data: {}) => {
          this.news = data;
          console.log(this.news);
        });
    }
  }

  ngOnInit() {
    this.getNews();
    console.log(this.route.snapshot.url[0].path);
  }

}
