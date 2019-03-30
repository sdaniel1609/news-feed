import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderService} from './loader.service';
import {finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService implements HttpInterceptor{

  constructor(public loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    const newRequest = req.clone({
      headers: req.headers.set(
        'Authorization', '796b242b8fc641ffa1d48a031a9fe11c'
      )
    });

    console.log(newRequest);
    console.log(newRequest.body);

    return next.handle(newRequest).pipe(
      finalize(()=> this.loaderService.hide())
    );
  }
}
