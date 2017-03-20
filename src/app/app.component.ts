import { Component, OnDestroy } from '@angular/core';
import { DbService } from './db.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnDestroy {
  title = 'app works!';
  pageNames = [];
  counter;
  constructor(private db: DbService) {
    this.db.setCurrentPagePath('root');
  }

  ngOnDestroy() {
    // this.db.resetCurrentPagePath();
  }
}
