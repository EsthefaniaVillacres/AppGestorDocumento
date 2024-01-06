import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatecareerService {

  private urlApi = config.apiUrl + '/api/templatecareer';
  constructor(private http: HttpClient, private authServices: AuthService) { }
  public getTemplateAsignedByCareer(idCareer:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/templateasigned/'+idCareer, { headers });
  }
  public getTemplateUnasignedByCareer(idCareer:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/templateunasigned/'+idCareer, { headers });
  }
  public create(data: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi, data, { headers });
  }
  
  public delete(idCareer: any,idTemplateCab:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete<any>(this.urlApi + '/' + idCareer+'/'+idTemplateCab, { headers });
  }
}
