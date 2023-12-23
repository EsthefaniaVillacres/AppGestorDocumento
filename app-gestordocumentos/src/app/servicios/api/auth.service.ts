import { Injectable } from '@angular/core';
import { config } from 'config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private urlApi=config.apiUrl+'/api/auth';
  constructor( private http:HttpClient) { }
}
