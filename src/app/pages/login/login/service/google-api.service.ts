import { Injectable } from '@angular/core';
import { AuthConfig} from 'angular-oauth2-oidc';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  constructor(private afauth: AngularFireAuth){}

  async register(email: string, passord: string) {
    try{
      return await this.afauth.signInWithEmailAndPassword(email,passord)
    }catch(err){
      console.log("error en el login", err);
      return null;
    }
  }

  
  async login(email: string, password: string) {
    try {
      return await this.afauth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (err) {
      console.log("error en login con google: ", err);
      return null;
    }
  }

  getUserLogged() {
    return this.afauth.authState;
  }

  logout() {
    this.afauth.signOut();
  }
}


