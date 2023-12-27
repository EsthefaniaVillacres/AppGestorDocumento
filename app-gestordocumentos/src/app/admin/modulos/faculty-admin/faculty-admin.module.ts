import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyAdminRoutingModule } from './faculty-admin-routing.module';
import { PagFacultyAdminComponent } from './pag-faculty-admin/pag-faculty-admin.component';
import { TabFacultyAdminComponent } from './componentes/tab-faculty-admin/tab-faculty-admin.component';
import { FormFacultyAdminComponent } from './componentes/form-faculty-admin/form-faculty-admin.component';


@NgModule({
  declarations: [
    PagFacultyAdminComponent,
    TabFacultyAdminComponent,
    FormFacultyAdminComponent
  ],
  imports: [
    CommonModule,
    FacultyAdminRoutingModule
  ],
  exports: [
    PagFacultyAdminComponent,
    TabFacultyAdminComponent,
    FormFacultyAdminComponent
  ]
})
export class FacultyAdminModule { }
