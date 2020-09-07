import { Component, OnInit } from '@angular/core';
import { DataService } from '../../common/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [DataService]
})
export class CardsComponent {
  currentPage: number = 1;
  isShowCard = false;
  authorName: Array<any> = [];
  response: any;
  items: object = {};
  data: Array<any> = [];
  scrollCallback;

  constructor(private dataService: DataService) {
    this.scrollCallback = this.getStories.bind(this);
  }

  getStories() {
    this.dataService.getData(this.currentPage)
      .subscribe((res) => {
        this.currentPage++;
        this.data = this.data.concat(res.docs);
      });
    return this.data;
  }
}

