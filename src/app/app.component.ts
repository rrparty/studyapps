import { Component, OnDestroy, OnInit } from '@angular/core';
import { DbService } from './db.service';
import { AngularFire, FirebaseAuthState, AuthProviders, AuthMethods } from 'angularfire2';
import { User } from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app works!';
  pageNames = [];
  userDisplayName: string;
  userAuth: User;
  counter;
  constructor(
    private db: DbService,
    private af: AngularFire
  ) {
    this.db.setCurrentPagePath('root');
  }
  ngOnInit() {
    // console.log(this.af.auth);
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.userAuth = auth.auth;
      }
      // this.useAuth.auth = auth.auth;
    });
  }
  ngOnDestroy() {
    // this.db.resetCurrentPagePath();
  }

  login() {
    this.af.auth.login(
      {
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
      }
    ).then(
      resolved => {
        console.log(resolved);
      },
      rejected => {
        console.log(rejected.message);
      }
      ).catch(
      rejected => {
        console.log(rejected.message);
      }
      );
  }

  signout() {
    this.af.auth.logout();
    this.userAuth = null;
  }
}
