import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagUserAdminComponent } from './pag-user-admin/pag-user-admin.component';

const routes: Routes = [
  {path:'', component:PagUserAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAdminRoutingModule { }
