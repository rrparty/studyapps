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
import { QuestionComponent } from './question/question.component';
import { SignupComponent } from './signup/signup.component';
import { firebase_config } from './configs';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    HomeComponent,
    TopicComponent,
    QuestionComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebase_config),
    RouterModule.forRoot(
      [
        { path: 'curriculum', component: CurriculumComponent },
        { path: 'home', component: HomeComponent },
        { path: 'topic', component: TopicComponent },
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'signup', component: SignupComponent },
      ]
    )
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
