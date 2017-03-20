import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';
import { DbService } from './db.service';
import { QuestionComponent } from './question/question.component'
@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    HomeComponent,
    TopicComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: 'curriculum', component: CurriculumComponent },
        { path: 'home', component: HomeComponent },
        { path: 'topic', component: TopicComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
      ]
    )
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

let routerConfig = [

]