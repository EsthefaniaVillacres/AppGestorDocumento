import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accesoModo:boolean=true
  dataRegister:any={name:'',email:'',password:''}
  dataLogin:any={email:'',password:''}

constructor(private authService: AuthService,
            private router: Router){
  console.log(this.accesoModo)

}

cambiarAcceso(){
  this.accesoModo=!this.accesoModo
}
registrar(dato:any){
  dato.IdPerfil=1
  this.authService.register(dato).subscribe(response=>{
    alert('Registro existoso')
  })
}
ingresar(dato:any){
this.authService.login(dato).subscribe(response=>{
  localStorage.setItem('token', response.token);
  localStorage.setItem('IdPerfil',response.dato.IdPerfil);
  this.router.navigate(['/admin']);
  
} )
}

}
