import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagStudentAdminComponent } from './pag-student-admin/pag-student-admin.component';

const routes: Routes = [
  {path:'',component:PagStudentAdminComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentAdminRoutingModule { }
