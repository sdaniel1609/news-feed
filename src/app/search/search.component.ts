import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {FormControl} from '@angular/forms';
import {DataService} from '../data.service';

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
    console.log(topic);
    this.searchNews();
  }


  searchNews(): void {
    this.newsService.searchNews(this.searchTerm, 20)
      .subscribe(res => {
        this.search = res;
        console.log(res);
      });
  }

  ngOnInit() {
    console.log('fetching data');
    this.dataService.currentMessage.subscribe(message => this.search = message);
  }

}
