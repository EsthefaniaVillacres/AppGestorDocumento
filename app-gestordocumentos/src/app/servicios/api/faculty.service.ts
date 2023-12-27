import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private urlApi=config.apiUrl+'/api/faculties';
  constructor(private http:HttpClient,private authServices: AuthService) { }
  public getAll():Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi,{ headers });
  }
  public create(data:any):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi,data,{ headers });
  }
  public update(data:any,id:string):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.put<any>(this.urlApi+'/'+id,data,{ headers });
  }
  public delete(id:string):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete<any>(this.urlApi+'/'+id,{ headers });
  }
}
