import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateAdminRoutingModule } from './template-admin-routing.module';
import { PagTemplateAdminComponent } from './pag-template-admin/pag-template-admin.component';
import { CabTemplateAdminComponent } from './componentes/cab-template-admin/cab-template-admin.component';
import { DetTemplateAdminComponent } from './componentes/det-template-admin/det-template-admin.component';
import { FormTemplateAdminComponent } from './componentes/form-template-admin/form-template-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Componentes prime ng
import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    PagTemplateAdminComponent,
    CabTemplateAdminComponent,
    DetTemplateAdminComponent,
    FormTemplateAdminComponent
  ],
  imports: [
    CommonModule,
    TemplateAdminRoutingModule,
    SplitterModule,
    CardModule,
    PanelModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ConfirmDialogModule
  ],
  exports: [
    PagTemplateAdminComponent,
    CabTemplateAdminComponent,
    DetTemplateAdminComponent,
    FormTemplateAdminComponent
  ]
})
export class TemplateAdminModule { }
