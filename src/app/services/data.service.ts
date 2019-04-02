import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private messageSource = new BehaviorSubject<any>('')

   private hideSource = new BehaviorSubject<any>('')

   currentMessage = this.messageSource.asObservable();

   hideMessage = this.hideSource.asObservable();

   changeMessage(message: any) {
     this.messageSource.next(message);
   }

   changeHide(hide: boolean) {
     this.hideSource.next(hide);
   }

  constructor() { }
}
