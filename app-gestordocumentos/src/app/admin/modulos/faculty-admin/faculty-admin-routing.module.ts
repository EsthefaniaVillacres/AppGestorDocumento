import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagFacultyAdminComponent } from './pag-faculty-admin/pag-faculty-admin.component';

const routes: Routes = [
  {path:'',component:PagFacultyAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyAdminRoutingModule { }
