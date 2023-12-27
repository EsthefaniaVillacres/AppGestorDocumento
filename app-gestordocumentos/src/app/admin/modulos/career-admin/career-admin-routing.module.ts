import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagCareerAdminComponent } from './pag-career-admin/pag-career-admin.component';

const routes: Routes = [
  {path:'',component:PagCareerAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerAdminRoutingModule { }
