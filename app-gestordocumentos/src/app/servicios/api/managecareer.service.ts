import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagecareerService {

  private urlApi = config.apiUrl + '/api/managecareer';
  constructor(private http: HttpClient, private authServices: AuthService) { }
  public getCareerAsignedByUser(idUser:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/careerasigned/'+idUser, { headers });
  }
  public getCareerUnasignedByUser(idSecretary:any,idAdmin:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/careerunasigned/'+idSecretary+'/'+idAdmin, { headers });
  }
  public getUserAsignedByCareer(idCareer:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/userasigned/'+idCareer, { headers });
  }
  public getUserUnasignedByCareer(idCareer:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/userunasigned/'+idCareer, { headers });
  }
  public getManageCareerBySecretary(idSecretary:any): Observable<any>{
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/careers/'+idSecretary, { headers });
  }

  public create(data: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi, data, { headers });
  }
  
  public delete(idUser: any,idCareer:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete<any>(this.urlApi + '/' + idUser+'/'+idCareer, { headers });
  }
}
