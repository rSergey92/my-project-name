import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RatingComponent } from './components/rating/rating.component';
import { InfiniteScrollerDirective } from './common/infinite-scroller.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'cards/:id', component: ItemCardComponent},
  {path: '**', component: NotFoundComponent},
]

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    NotFoundComponent,
    ItemCardComponent,
    CommentsComponent,
    RatingComponent,
    InfiniteScrollerDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
