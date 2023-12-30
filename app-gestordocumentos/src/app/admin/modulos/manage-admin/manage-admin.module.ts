import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAdminRoutingModule } from './manage-admin-routing.module';
import { PagManageAdminComponent } from './pag-manage-admin/pag-manage-admin.component';
import { TabManageAdminComponent } from './componentes/tab-manage-admin/tab-manage-admin.component';
import { FormManageAdminComponent } from './componentes/form-manage-admin/form-manage-admin.component';
//COMPONENTES PRIME NG
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RatingModule } from 'primeng/rating';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ManageUserAdminComponent } from './componentes/manage-user-admin/manage-user-admin.component';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    PagManageAdminComponent,
    TabManageAdminComponent,
    FormManageAdminComponent,
    ManageUserAdminComponent
  ],
  imports: [
    CommonModule,
    ManageAdminRoutingModule,
    ToastModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    FileUploadModule,
    TableModule,
    InputTextModule,
    DialogModule,
    InputTextareaModule,
    DropdownModule,
    TagModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    RatingModule,
    CardModule,
    SharedModule,
    ListboxModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SplitterModule
  ],
  exports: [
    PagManageAdminComponent,
    TabManageAdminComponent,
    FormManageAdminComponent,
    ManageUserAdminComponent
  ]
})
export class ManageAdminModule { }
