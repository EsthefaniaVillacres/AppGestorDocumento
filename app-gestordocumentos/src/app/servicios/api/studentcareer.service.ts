import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentcareerService {

  private urlApi = config.apiUrl + '/api/studentcareer';
  constructor(private http: HttpClient, private authServices: AuthService) { }
  public getCareerAsignedByStudent(idCareer:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/careerasigned/'+idCareer, { headers });
  }
  public getCareerUnasignedByStudent(idStudent:any,idSecretary:any ): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/careerunasigned/'+idStudent+'/'+idSecretary, { headers });
  }
  public create(data: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi, data, { headers });
  }
  
  public delete(idCareer: any,idStudent:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete<any>(this.urlApi + '/' + idCareer+'/'+idStudent, { headers });
  }
}
