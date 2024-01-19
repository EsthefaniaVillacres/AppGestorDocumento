import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};
@Component({
  selector: 'app-pag-principal-admin',
  templateUrl: './pag-principal-admin.component.html',
  styleUrls: ['./pag-principal-admin.component.css']
})
export class PagPrincipalAdminComponent implements OnInit {
  contraerSelected: any;
  loginDisplay = false;
  profile!: ProfileType;
  constructor(private authService: MsalService, 
    private msalBroadcastService: MsalBroadcastService,
     private http: HttpClient) { }
  contraer(a: any) {
    this.contraerSelected = a
  }

  ngOnInit(): void {
    this.getProfile();
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
      });
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })
  }
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
      });
  }
}
