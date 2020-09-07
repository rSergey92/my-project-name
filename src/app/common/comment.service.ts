import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface IComment {
  id?: string;
  title: string;
  author_key?: string;
}

interface ICreateResponse {
  name: string;
}

@Injectable({providedIn: 'root'})

export class CommentService {
  static url = 'https://save-comment.firebaseio.com/';

  constructor(private http: HttpClient) {}

    loadComment(author_key): Observable<any> {
    return this.http.get<any>(`${CommentService.url}/${author_key}.json`)
      .pipe(map((comments) => {
        return Object.keys(comments).map(key => ({...comments[key], id: key}));
      }));
  }

  create(comment: IComment): Observable<{ author_key?: string; id: string; title: string }> {
    return this.http
      .post<ICreateResponse>(`${CommentService.url}/${comment.author_key}.json`, comment)
      .pipe(map(res => {
        return {...comment, id: res.name};
      }));
  }

  remove(comment: IComment): Observable<void> {
    return this.http
      .delete<void>(`${CommentService.url}/${comment.author_key}/${comment.id}.json`);

  }
}
