import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NavigationComponent } from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { TopicsComponent } from './topics/topics.component';
import {MatInputModule} from '@angular/material/input';

const appRoutes: Routes = [
  {path: '', component: TopHeadlinesComponent},
  { path: 'top-headlines', component: TopHeadlinesComponent },
  { path: 'united-kingdom', component: TopicsComponent },
  { path: 'technology', component: TopicsComponent },
  { path: 'health', component: TopicsComponent },
  { path: 'sports', component: TopicsComponent },
  { path: 'science', component: TopicsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    TopHeadlinesComponent,
    NavigationComponent,
    ToolbarComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, MatInputModule, MatListModule , MatSidenavModule, MatIconModule, BrowserAnimationsModule, FormsModule, MatCheckboxModule, MatToolbarModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
