import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalAdminComponent } from './pag-principal-admin/pag-principal-admin.component';

const routes: Routes = [
  {path:'',component:PagPrincipalAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
