import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { config } from 'config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionfolderService {

  private urlApi = config.apiUrl + '/api/permissionfolder';
  constructor(private http: HttpClient, private authServices: AuthService) { }
  public getFoldersByTemplate(idPermissionTemplate:any,idTemplate:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/folder/'+idPermissionTemplate+'/'+idTemplate, { headers });
  }
  public getPermissionFolderByParameters(idPermissionTemplate:any,idTemplateDet:any){
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/parameters/'+idPermissionTemplate+'/'+idTemplateDet, { headers });
  }
  public getPermissionFolderById(id:any){
    const token = this.authServices.getToken();   
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/'+id, { headers });
  }
  public create(data: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi, data, { headers });
  }
}
