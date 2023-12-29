import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagTemplateAdminComponent } from './pag-template-admin/pag-template-admin.component';

const routes: Routes = [
  {path:'',component:PagTemplateAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateAdminRoutingModule { }
