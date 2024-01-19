import { Component } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from 'src/app/servicios/api/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor( private authService: MsalService) {}
  cerrarSesion(){
      this.authService.logoutPopup({
        mainWindowRedirectUri: "/"
      });
  }
}
