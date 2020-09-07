import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const DEFAULT_URL = 'http://openlibrary.org';

@Injectable()

export class DataService {
  public data: any;
  constructor(private http: HttpClient) {}

  getData(page: number = 1): any {
    this.data = this.http.get(`${DEFAULT_URL}/search.json?q=the+lord+of+the+rings&page=${page}`);
    return this.data;
  }
}
