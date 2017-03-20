import { Component, OnInit } from '@angular/core';
import { NgForm, NgControl } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: TQuestion[] = [
    {
      qid: 1,
      qText: 'Who is Hooligan?',
      qType: 'MCQ-1',
      options: [{ choice: 1, text: 'Rishi' }, { choice: 2, text: 'Ronjan' }, { choice: 3, text: 'Vivek' }],
      answer: { choice: 2, text: 'Ronjan' },
      explanation: 'I am anything'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.questions)
  }

  submit(data: NgForm) {
    console.log(data);
  }
  adminCheck(control: NgControl) {
    console.log(control)
  }

}
interface TQuestion {
  qid: number;
  qText: string;
  qType: 'MCQ-1' | 'MSQ-2';
  options: [{}];
  answer: {};
  explanation: string;
}
