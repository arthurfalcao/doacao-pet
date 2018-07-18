import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private location: Location) {
    this.user = afAuth.authState;
   }

   loginGoogle(){
     const provider = new firebase.auth.GoogleAuthProvider();
     this.afAuth.auth.signInWithPopup(provider).then(ok =>{
       this.location.back();
     });
   }

   loginFacebook(){
     const provider = new firebase.auth.FacebookAuthProvider();
     this.afAuth.auth.signInWithPopup(provider).then(ok =>{
      this.location.back();
    });
   }

   logout(){
     this.afAuth.auth.signOut();
   }

   getUserAuth(){
    return this.user;
   }
}
