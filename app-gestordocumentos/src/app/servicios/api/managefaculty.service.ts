import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagefacultyService {

  private urlApi = config.apiUrl + '/api/managefaculty';
  constructor(private http: HttpClient, private authServices: AuthService) { }
  public getFacultyAsignedByUser(idUser:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/facultyasigned/'+idUser, { headers });
  }
  public getFacultyUnasignedByUser(idUser:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/facultyunasigned/'+idUser, { headers });
  }
  public getUserAsignedByFaculty(idFaculty:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/userasigned/'+idFaculty, { headers });
  }
  public getUserUnasignedByFaculty(idFaculty:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi+'/userunasigned/'+idFaculty, { headers });
  }
  

  public create(data: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post<any>(this.urlApi, data, { headers });
  }
  
  public delete(idUser: any,idFaculty:any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete<any>(this.urlApi + '/' + idUser+'/'+idFaculty, { headers });
  }
}


