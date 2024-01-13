import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPermissionAdminComponent } from './pag-permission-admin/pag-permission-admin.component';

const routes: Routes = [
  {path:'',component:PagPermissionAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionAdminRoutingModule { }
