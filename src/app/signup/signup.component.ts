import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private af: AngularFire
  ) { }

  ngOnInit() {
  }

  signup(authServiceName: string) {
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
    // switch (authServiceName) {
    //   case 'google':

    //     break;

    //   default:
    //     break;
    // }
  }
}
