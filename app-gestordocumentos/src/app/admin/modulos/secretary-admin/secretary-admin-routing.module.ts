import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagSecretaryAdminComponent } from './pag-secretary-admin/pag-secretary-admin.component';

const routes: Routes = [
  {path:'',component:PagSecretaryAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecretaryAdminRoutingModule { }
