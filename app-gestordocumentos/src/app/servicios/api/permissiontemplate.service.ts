import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissiontemplateService {

  private urlApi = config.apiUrl + '/api/permissiontemplate';
  constructor(private http: HttpClient, private authServices: AuthService) { }
  public getTemplatesByManageCareer(idManageCareer:any,idCareer:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/template/'+idManageCareer+'/'+idCareer, { headers });
  }

  public create(data: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi, data, { headers });
  }
  public getPermissionTemplateByParameters(idManageCareer:any,idTemplateCab:any){
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/parameters/'+idManageCareer+'/'+idTemplateCab, { headers });
  }
  public getPermissionTemplateById(id:any){
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/'+id, { headers });
  }
}
