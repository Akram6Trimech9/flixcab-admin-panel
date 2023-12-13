import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../ts/enum';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private _http: HttpClient) { }

  upload(files: FileList, id: string): Observable<any> {
    const formData: FormData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    return this._http.put<any>(`${ApiRoutes.product}/upload/${id}`, formData);
  }
  delete(id : any ):Observable<any>{ 
     return this._http.get<any>(`${ApiRoutes.product}/images/${id}`)
  }
}
