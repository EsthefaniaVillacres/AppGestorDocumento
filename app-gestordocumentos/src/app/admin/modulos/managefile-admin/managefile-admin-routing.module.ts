import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagManagefileAdminComponent } from './pag-managefile-admin/pag-managefile-admin.component';

const routes: Routes = [
  {path:'',component:PagManagefileAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagefileAdminRoutingModule { }
