import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../ts/enum';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http:HttpClient) { }

  getUsers():Observable<any>{ 
    return this._http.get<any>(`/user/all-users`)
  }
  blockUser(block : any, id : any):Observable<any>{ 
    return this._http.put<any>(`/user/block-user/${id}`,block)
  }
  unBlockUser(block : any, id : any):Observable<any>{ 
    return this._http.put<any>(`/user/unblock-user/${id}`,block)
  }
}
