import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  static urlAuthor = 'http://openlibrary.org/search.json?author=';
  static urlComment = 'https://save-comment.firebaseio.com/';

  dataAuthor: any;
  dataComment: any[] = [];
  id: Number;

  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
  ) {
    this.id = activateRoute.snapshot.params.id;
    this.getAuthor();
    this.getComment();
  }

  getAuthor() {
    return this.http
      .get(`${ItemCardComponent.urlAuthor}${this.id}`)
      .subscribe(res => {
        this.dataAuthor = res;
      });
  }
  getComment() {
    return this.http
      .get(`${ItemCardComponent.urlComment}${this.id}.json`)
      .pipe(map((comments) => {
        return Object.keys(comments).map(key => ({...comments[key], id: key}));
      })).subscribe(res => this.dataComment = res);
  }
}
