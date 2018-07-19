import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common';
import { AngularFireList } from '../../../node_modules/angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<firebase.User>;
  userList: AngularFireList<any>;
  
  
  constructor(public afAuth: AngularFireAuth, private location: Location, private router: Router) {
    this.user = afAuth.authState;
   }

   insertUser(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(value => {
      console.log('Success!', value);
      this.router.navigate([""]);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
   }

   loginEmailandPassword(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
      console.log('Nice, it worked!');
      this.router.navigate([""]);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
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
