import {Component, OnChanges, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})

export class TopicsComponent implements OnInit {
  news: any;
  category: string;

  constructor(private newsService: NewsService,
  private route: ActivatedRoute, private router: Router
//  private location: Location
  ) {}

  getCategoryNews(): void {
    this.news = [];
   // const id = +this.route.snapshot.paramMap.get('id');
    this.category = this.router.config[0].path;
    this.newsService.getCategoryHeadlines(this.category, 20)
      .subscribe((data: {}) => {
        console.log(data)
        this.news = data;
      });
  }

  ngOnInit() {
    this.getCategoryNews();
    console.log(this.category);
  }

}
