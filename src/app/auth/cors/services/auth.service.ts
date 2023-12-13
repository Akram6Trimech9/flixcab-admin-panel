import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ApiRoutes, LocalStorage } from 'src/app/ts/enum';
import { CredentialsInterface, LoginInterface } from 'src/app/ts/interfaces';
import { tokenInterface } from 'src/app/ts/interfaces/auth';
import { AUTHORIZATION_HEADER_KEY, AUTHORIZATION_HEADER_PREFIX } from '../interceptor/token/token.interceptor';
import { AuthStoreService } from './auth-store.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserInterface } from 'src/app/ts/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient , private _authStore: AuthStoreService) { }

  helper = new JwtHelperService();
  
 
  login(payload : LoginInterface) : Observable<CredentialsInterface>{
    return  this._http.post<CredentialsInterface>(ApiRoutes.login, payload)
    .pipe(
      map( (credentials: CredentialsInterface) => { 
        this._authStore.login(credentials)
         return credentials ; 
      })
    )
  }


  logout() :Observable<void>{
    return    this._http.get(ApiRoutes.logout , {}).pipe(
       map(()=>{                
           this._authStore.logout()
       })
    )
  }

  getUserInfo(): Observable<UserInterface> {
    let token:any=localStorage.getItem(LocalStorage.AccessToken)
    let decodeToken=this.helper.decodeToken(token)
     const id = decodeToken?.id
    return this._http.get<UserInterface>(`${ApiRoutes.userInfo}/${id}`).pipe(
      map((user: UserInterface) => {
        this._authStore.setUserInfo(user);
        return user;
      })
    );
  }
  // refreshToken(): Observable<tokenInterface> {    
  //   const headers = {
  //     [AUTHORIZATION_HEADER_KEY]: `${AUTHORIZATION_HEADER_PREFIX} ${this._authStore.gRefreshToken}`,
  //   };
  //   return this._http.get<tokenInterface>(ApiRoutes.Refresh, { headers }).pipe(
  //     map(({ accessToken, refreshToken }: tokenInterface) => {
  //       this._authStore.setAccessToken(accessToken);
  //       this._authStore.setRefreshToken(refreshToken);
  //       return { accessToken, refreshToken };
  //     })
  //   );
  // }
  get hasAccessToken(): boolean {
    return !!this._authStore.gAccessToken;
  }

}
