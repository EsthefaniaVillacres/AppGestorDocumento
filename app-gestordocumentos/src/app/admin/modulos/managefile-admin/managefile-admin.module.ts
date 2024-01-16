import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//COMPONENTES PRIME NG
import { ManagefileAdminRoutingModule } from './managefile-admin-routing.module';
import { PagManagefileAdminComponent } from './pag-managefile-admin/pag-managefile-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchivoVisorComponent } from './archivo-visor/archivo-visor.component';
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
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    PagManagefileAdminComponent,
    ArchivoVisorComponent
  ],
  imports: [
    CommonModule,
    ManagefileAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    SplitterModule,
  ],
  exports: [
    PagManagefileAdminComponent,
    ArchivoVisorComponent
  ]
})
export class ManagefileAdminModule { }
