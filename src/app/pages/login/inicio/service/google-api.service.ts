import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const OAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: 'dmbtt9g64apis7b1ccjf79pvsmnp57g2.apps.googleusercontent.com',
  scope: 'openid profile email'
};

export interface UserInfo{
  info:{
    sub: string
    email: string,
    name: string,
    picture: string
  }

}

@Injectable({
  providedIn: 'root',
})
export class GoogleApiService {
  userProfilesubject= new Subject<UserInfo>()
  constructor(private readonly oAuthService: OAuthService) {
    oAuthService.configure(OAuthConfig);
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginCodeFlow().then(() => {
        if(oAuthService.hasValidAccessToken()){
          oAuthService.initLoginFlow()
        }else{
          oAuthService.loadUserProfile().then( (userProfile) => {
            this.userProfilesubject.next(userProfile as UserInfo)
          })
        }
      });
    });
  }

  isLoggedIn(): boolean{
    return this.oAuthService.hasValidAccessToken()
  }
  signOut(){
    this.oAuthService.logOut()
  }

}


