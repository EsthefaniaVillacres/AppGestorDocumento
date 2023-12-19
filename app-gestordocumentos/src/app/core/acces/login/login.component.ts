import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accesoModo:boolean=true

constructor(){
  console.log(this.accesoModo)
}

cambiarAcceso(){
  this.accesoModo=!this.accesoModo
}

}
