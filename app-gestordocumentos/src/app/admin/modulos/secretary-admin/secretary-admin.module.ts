import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecretaryAdminRoutingModule } from './secretary-admin-routing.module';
import { PagSecretaryAdminComponent } from './pag-secretary-admin/pag-secretary-admin.component';
import { TabSecretaryAdminComponent } from './componentes/tab-secretary-admin/tab-secretary-admin.component';
import { FormSecretaryAdminComponent } from './componentes/form-secretary-admin/form-secretary-admin.component';
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
import { ManageSecretaryAdminComponent } from './componentes/manage-secretary-admin/manage-secretary-admin.component';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    PagSecretaryAdminComponent,
    TabSecretaryAdminComponent,
    FormSecretaryAdminComponent,
    ManageSecretaryAdminComponent
  ],
  imports: [
    CommonModule,
    SecretaryAdminRoutingModule,
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
    PagSecretaryAdminComponent,
    TabSecretaryAdminComponent,
    FormSecretaryAdminComponent,
    ManageSecretaryAdminComponent
  ]
})
export class SecretaryAdminModule { }
