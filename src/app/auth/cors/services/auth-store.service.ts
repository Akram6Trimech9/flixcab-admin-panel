import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorage } from 'src/app/ts/enum';
import { CredentialsInterface } from 'src/app/ts/interfaces';
import { UserInterface } from 'src/app/ts/interfaces/user';
import { AuthService } from './auth.service';
import { CurrentUserService } from './current-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthStoreService {
 refreshToken  : string | null = null ; 
 accessToken  : string | null = null ; 
 user  : UserInterface | null = null ; 


  get isAuthenticated(): boolean {
    return !!this.user ;
  }
  get gRefreshToken() {
   return  localStorage.getItem(LocalStorage.RefreshToken)
  }

  get gAccessToken() {
    return  localStorage.getItem(LocalStorage.AccessToken)
   }
   

  
  login(obj : CredentialsInterface): void{
    this.setAccessToken(obj.accessToken)
   this.setRefreshToken(obj.refreshToken)
 

  }
  getAccessToken(){
    return localStorage.getItem(LocalStorage.AccessToken)
  }
  setAccessToken( token : string | null ) : void {
    this.accessToken = token 
     if(!token){
       localStorage.removeItem(LocalStorage.AccessToken)
       return ; 
     }
    localStorage.setItem(LocalStorage.AccessToken , token)

  }
  setRefreshToken( token : string | null ) : void { 
    this.accessToken = token 
     if(!token){
       localStorage.removeItem(LocalStorage.RefreshToken)
       return ; 
     }
    localStorage.setItem(LocalStorage.RefreshToken , token)
  }

  setUserInfo(user : UserInterface | null): void  {
      this.user = user
  }
  logout(): void{
      this.setAccessToken(null)
      this.setRefreshToken(null)
      this.setUserInfo(null)
  }

}
