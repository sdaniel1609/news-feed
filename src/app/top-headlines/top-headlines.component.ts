import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.css']
})
export class TopHeadlinesComponent implements OnInit {
  categories = ['United-Kingdom', 'technology', 'health', 'sports', 'science'];
  gbNews = [];
  techNews = [];
  healthNews = [];
  sportsNews = [];
  scienceNews = [];

  constructor(private newsService: NewsService) { }

  getCountryNews(): void {
    for (let i = 0; i < 5 ; i ++) {
      if (this.categories[i] === 'United-Kingdom') {
        this.newsService.getCountryHeadlines('gb', 4)
          .subscribe(gbNews => {
            this.gbNews = gbNews;
          }
          );
      } else if (this.categories[i] === 'technology') {
        this.newsService.getTopicsHeadlines(this.categories[i], 4)
          .subscribe(techNews => {
            this.techNews = techNews;
            }
          );
      } else if (this.categories[i] === 'health') {
        this.newsService.getTopicsHeadlines(this.categories[i], 4)
          .subscribe(healthNews => {
              this.healthNews = healthNews;
            }
          );
      } else if (this.categories[i] === 'sports') {
        this.newsService.getTopicsHeadlines(this.categories[i], 4)
          .subscribe(sportsNews => {
              this.sportsNews = sportsNews;
            }
          );
      } else if (this.categories[i] === 'science') {
        this.newsService.getTopicsHeadlines(this.categories[i], 4)
          .subscribe(scienceNews => {
            console.log(scienceNews)
              this.scienceNews = scienceNews;
            }
          );
      }
    }
  }

  
  ngOnInit() {
    this.getCountryNews();
  }
}
