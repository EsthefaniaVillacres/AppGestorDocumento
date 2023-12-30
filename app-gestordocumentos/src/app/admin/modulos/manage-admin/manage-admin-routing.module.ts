import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagManageAdminComponent } from './pag-manage-admin/pag-manage-admin.component';

const routes: Routes = [
  {path:'',component:PagManageAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAdminRoutingModule { }
