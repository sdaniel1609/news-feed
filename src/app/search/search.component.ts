import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search = [];
  searchTerm: string;
 // myControl = new FormControl();
  options: string[] = ['Apple', 'Bitcoin', 'Sports'];

  news = new FormControl('');

  constructor(private newsService: NewsService) { }

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
  }

}
