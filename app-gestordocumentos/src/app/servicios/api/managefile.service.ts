import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from 'config';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagefileService {

  private urlApi = config.apiUrl + '/api/managefile';
  constructor(private http: HttpClient, private authServices: AuthService) { }
  public obtenerArchivos(): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get(`${this.urlApi}/`, { headers });
  }

  public obtenerArchivo(id: number): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get(`${this.urlApi}/${id}`, { headers });
  }

  public subirArchivo(data: FormData): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.post(`${this.urlApi}/`, data, { headers });
  }

  public descargarArchivo(id: number): Observable<Blob> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get(`${this.urlApi}/${id}/download`, { responseType: 'blob', headers });
  }

  eliminarArchivo(id: number): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.delete(`${this.urlApi}/${id}`, { headers });
  }
  public getFacultiesByIdSecretary(idSecretary: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi + '/facultades/' + idSecretary, { headers });
  }
  public getCarrersBySecretaryFaculty(idSecretary: any, idFaculty: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi + '/carreras/' + idSecretary + '/' + idFaculty, { headers });
  }
  public getStudentByCarrers(idCareer: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi + '/estudiantes/' + idCareer, { headers });
  }
  public getTemplatesBySecretaryCareer(idSecretary: any, idCareer: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi + '/templates/' + idSecretary + '/' + idCareer, { headers });
  }
  public getTemplateDetBySecretaryTemplate(idSecretary: any, idTemplateCab: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi + '/folder/' + idSecretary + '/' + idTemplateCab, { headers });
  }
  public getFilesByStudentFolder(idStudent: any, IdTemplateDet: any): Observable<any> {
    const token = this.authServices.getToken();
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    })
    return this.http.get<any>(this.urlApi + '/file/' + idStudent + '/' + IdTemplateDet, { headers });
  }
}
