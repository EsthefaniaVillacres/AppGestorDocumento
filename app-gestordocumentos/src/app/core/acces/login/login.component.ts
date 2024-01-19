import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { InteractionStatus, PopupRequest, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/servicios/api/auth.service';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  accesoModo: boolean = true
  dataRegister: any = { name: '', email: '', password: '' }
  dataLogin: any = { email: '', password: '' }
  isIframe = false;
  loginDisplay = false;
  profile!: ProfileType;
  private readonly _destroying$ = new Subject<void>();

  constructor(private authServices: AuthService,
    private router: Router, private authService: MsalService,
    private broadcastService: MsalBroadcastService,
    @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
    private http: HttpClient) {
    console.log(this.accesoModo)

  }

  cambiarAcceso() {
    this.accesoModo = !this.accesoModo
  }
  registrar(dato: any) {
    dato.IdPerfil = 1
    this.authServices.register(dato).subscribe(response => {
      alert('Registro existoso')
    })
  }
  ingresar(dato: any) {
    this.authServices.login(dato).subscribe(response => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('IdPerfil', response.dato.IdPerfil);
      localStorage.setItem('dato', response.dato.id);


      this.router.navigate(['/admin']);

    })
  }
  // autentificacion
  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;
    this.broadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })
  }

  login() {
    if (this.msalGuardConfig.authRequest) {
      this.authService.loginPopup({ ...this.msalGuardConfig.authRequest } as PopupRequest)
        .subscribe({
          next: (result) => {
            console.log(result);
            this.getProfile()
            this.setLoginDisplay();
          },
          error: (error) => console.log(error)
        });
    } else {
      this.authService.loginPopup()
        .subscribe({
          next: (result) => {
            console.log(result);
            this.setLoginDisplay();
          },
          error: (error) => console.log(error)
        });
    }

  }
  logout() { // Add log out function here
    this.authService.logoutPopup({
      mainWindowRedirectUri: "/"
    });
  }
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
        this.dataLogin.email=this.profile.userPrincipalName
        console.log(this.dataLogin);
        
        this.authServices.login365(this.dataLogin).subscribe(response => {
          localStorage.setItem('token', response.token);
          localStorage.setItem('IdPerfil', response.dato.IdPerfil);
          localStorage.setItem('dato', response.dato.id);
          this.router.navigate(['/admin']);

        })
      });
  }
}
