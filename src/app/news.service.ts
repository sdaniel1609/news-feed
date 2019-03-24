import { Injectable } from '@angular/core';
import {News} from './news';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?';
  private apiKey = '796b242b8fc641ffa1d48a031a9fe11c';

  constructor(private http: HttpClient) { }

  getCountryHeadlines(country: string, size: number): Observable<any[]> {
    const url = `${this.topHeadlinesUrl}country=${country}&apiKey=${this.apiKey}&pageSize=${size}`;
    return this.http.get<any[]>(url)
      .pipe(
        map(result => result['articles']),
        catchError(this.handleError<any>('getCountryHeadlines'))
      );
  }

  getCategoryHeadlines(category: string, size: number): Observable<any[]> {
    const url = `${this.topHeadlinesUrl}category=${category}&apiKey=${this.apiKey}&pageSize=${size}&country=gb&country=us`;
    return this.http.get<any[]>(url)
      .pipe(
        map(result => result['articles']),
        catchError(this.handleError<any>('getCountryHeadlines'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
