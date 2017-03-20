import { Component, OnInit, OnDestroy } from '@angular/core';
import { DbService } from '../db.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit, OnDestroy {
  curriculum
  id;
  constructor(
    private db: DbService,
    private route: ActivatedRoute
  ) {
    this.db.setCurrentPagePath('curriculum');
  }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.db.getCurriculum(this.id).subscribe(
          value => {
            this.curriculum = value;
          }
        );
      }
    )
  }
  ngOnDestroy() {
    this.db.resetCurrentPagePath('curriculum');
  }
}
