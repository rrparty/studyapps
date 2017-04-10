import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbService } from '../db.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
   
})
export class HomeComponent implements OnInit, OnDestroy {
  curriculums = [];
  page = 'home'


  constructor(
    private db: DbService,
    private router: Router
  ) {
    this.db.setCurrentPagePath(this.page);
  }
  ngOnInit() {
    this.db.getCurriculums().subscribe(
      values => {
        this.curriculums = values
      }
    )
  }
  ngOnDestroy() {
    this.db.resetCurrentPagePath(this.page);
  }

  gotoCurriculum(curriculum) {
    this.router.navigate(['/curriculum', { id: curriculum.id }])
  }
}
