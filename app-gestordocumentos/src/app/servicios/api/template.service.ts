import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private urlApi=config.apiUrl+'/api/templates';
  constructor(private http:HttpClient,private authServices: AuthService) { }
  public getAll():Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi,{ headers });
  }
  public getDetByIdTemplateCab(id:number):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/'+id,{ headers });
  }
  public getOneByIdTemplateCab(id:number):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/onecab/'+id,{ headers });
  }
  public getOneByIdTemplateDet(id:number):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/onedet/'+id,{ headers });
  }
  
  public createCab(data:any):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi+'/cab',data,{ headers });
  }
  public createDet(data:any):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi+'/det',data,{ headers });
  }
  public updateCab(data:any,id:string):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.put<any>(this.urlApi+'/cab/'+id,data,{ headers });
  }
  public updateDet(data:any,id:string):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.put<any>(this.urlApi+'/det/'+id,data,{ headers });
  }
  public deleteCab(id:string):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete<any>(this.urlApi+'/cab/'+id,{ headers });
  }
  public deleteDet(id:string):Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete<any>(this.urlApi+'/det/'+id,{ headers });
  }
}
