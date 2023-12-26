import { Component } from '@angular/core';

@Component({
  selector: 'app-pag-principal-admin',
  templateUrl: './pag-principal-admin.component.html',
  styleUrls: ['./pag-principal-admin.component.css']
})
export class PagPrincipalAdminComponent {
  contraerSelected: any;
  contraer(a: any) {
    this.contraerSelected = a
  }
}
