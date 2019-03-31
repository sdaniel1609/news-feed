import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../services/news.service';
import {FormControl} from '@angular/forms';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = [];
  searchTerm: string;
  news = new FormControl('');

  constructor(private newsService: NewsService,
              private dataService: DataService,) {
  }

  submitSearch(topic: string): void {
    this.searchTerm = topic;
    this.searchNews();
  }


  searchNews(): void {
    this.newsService.searchNews(this.searchTerm, 20)
      .subscribe(res => {
        this.search = res;
      });
  }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.search = message);
  }

}
