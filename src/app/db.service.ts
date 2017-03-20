import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable()
export class DbService {
  pagePath = [];
  curriculum: Subject<string> = new Subject();
  constructor() { }
  setCurrentPagePath(pageName) {
    if (pageName == 'root') {
      this.pagePath.splice(0);
      return
    }
    this.pagePath.push(pageName)
  }
  resetCurrentPagePath(pageName) {
    //Check pageName is the last node
    if (this.pagePath[this.pagePath.length - 1] == pageName)
      this.pagePath.pop();
  }

  setCurriculum(curriculum) {
    this.curriculum.next(curriculum);
  }

  getCurriculums() {
    return Observable.of(
      testdata_curriculums
    )
  }
  getCurriculum(id) {
    return Observable.of(
      testdata_curriculums[id]
    )
  }
}

let testdata_curriculums = [
  { id: 0, name: 'MPSC Prelims', enable: true },
  { id: 1, name: 'HSLC (BoSEM)', enable: false },
  { id: 2, name: 'HSE (CoHSEM)', enable: false },
]
