import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavigationComponent } from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import {MatInputModule} from '@angular/material/input';
import { SearchComponent } from './search/search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoaderInterceptorService} from './loader-interceptor.service';
import { LoaderComponent } from './loader/loader.component';
import {LoaderService} from './loader.service';
import {DataService} from './data.service';

const appRoutes: Routes = [
  {path: '', component: TopHeadlinesComponent},
  { path: 'top-headlines', component: TopHeadlinesComponent },
  { path: 'united-kingdom', component: TopicsComponent },
  { path: 'technology', component: TopicsComponent },
  { path: 'health', component: TopicsComponent },
  { path: 'sports', component: TopicsComponent },
  { path: 'science', component: TopicsComponent },
  { path: 'search', component: SearchComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    NavigationComponent,
    TopicsComponent,
    SearchComponent,
    LoaderComponent,

  ],
  imports: [
    BrowserModule, MatProgressSpinnerModule,  HttpClientModule, NgMatSearchBarModule,  FormsModule, ReactiveFormsModule, MatAutocompleteModule, MatInputModule, MatListModule , MatSidenavModule, MatIconModule, BrowserAnimationsModule, FormsModule, MatCheckboxModule, MatToolbarModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [LoaderService, DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
