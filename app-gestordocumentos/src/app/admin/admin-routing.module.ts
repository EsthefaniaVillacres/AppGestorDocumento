import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagPrincipalAdminComponent } from './pag-principal-admin/pag-principal-admin.component';

const routes: Routes = [
  {path:'',component:PagPrincipalAdminComponent,children:[
    {path:'users',loadChildren:()=>import('./modulos/user-admin/user-admin-routing.module').then((m)=>m.UserAdminRoutingModule)},
    {path:'faculties',loadChildren:()=>import('./modulos/faculty-admin/faculty-admin-routing.module').then((m)=>m.FacultyAdminRoutingModule)}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
