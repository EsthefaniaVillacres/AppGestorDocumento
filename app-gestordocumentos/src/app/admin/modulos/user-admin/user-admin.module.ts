import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAdminRoutingModule } from './user-admin-routing.module';
import { PagUserAdminComponent } from './pag-user-admin/pag-user-admin.component';
import { TabUserAdminComponent } from './componentes/tab-user-admin/tab-user-admin.component';
import { FormUserAdminComponent } from './componentes/form-user-admin/form-user-admin.component';


@NgModule({
  declarations: [
    PagUserAdminComponent,
    TabUserAdminComponent,
    FormUserAdminComponent
  ],
  imports: [
    CommonModule,
    UserAdminRoutingModule
  ],
  exports: [
    PagUserAdminComponent,
    TabUserAdminComponent,
    FormUserAdminComponent
  ]
})
export class UserAdminModule { }
