import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  redirectUrl = '/';

  constructor(private afAuth: AngularFireAuth, private router: Router) {
     let firstLoad = true;
     this.afAuth.authState.subscribe(user => {
     if (!user && !firstLoad) {
        this.router.navigate(['/login']);
      }
     firstLoad = false;
    });
  }

  emailSignUp(email: string, password: string) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
          this.router.navigate([this.redirectUrl]);
        });
    }

  emailSignIn(email: string, password: string) {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          this.router.navigate([this.redirectUrl]);
        });
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  updateProfile(displayName: string, photoURL: string) {
   if (this.afAuth.authState) {
   return this.afAuth.auth.currentUser.updateProfile({
    displayName: displayName,
    photoURL: photoURL });
    }
   return null;
  }

  get authState() {
    return this.afAuth.authState;
  }

  get currentUser() {
    return this.afAuth.auth.currentUser;
  }

  get isSignedIn() {
   return !!this.currentUser;
  }

}
