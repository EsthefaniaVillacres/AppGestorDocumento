import { Component } from '@angular/core';
import { AuthService } from 'src/app/servicios/api/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor(public authService: AuthService) {}
  cerrarSesion(){
    this.authService.logout().subscribe(result=>{
      window.location.href='login'
    })

  }
}
