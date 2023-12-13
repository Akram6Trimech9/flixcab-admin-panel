import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailTsService {

  constructor(private _http:HttpClient) { }

  sendEmail(content : any ):Observable<any>{ 
    return this._http.post<any>(`/email/sendemailtouser`,content)
  }
}

