import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerAdminRoutingModule } from './career-admin-routing.module';
import { PagCareerAdminComponent } from './pag-career-admin/pag-career-admin.component';
import { TabCareerAdminComponent } from './componentes/tab-career-admin/tab-career-admin.component';
import { FormCareerAdminComponent } from './componentes/form-career-admin/form-career-admin.component';


@NgModule({
  declarations: [
    PagCareerAdminComponent,
    TabCareerAdminComponent,
    FormCareerAdminComponent
  ],
  imports: [
    CommonModule,
    CareerAdminRoutingModule
  ],
  exports: [
    PagCareerAdminComponent,
    TabCareerAdminComponent,
    FormCareerAdminComponent
  ]
})
export class CareerAdminModule { }
