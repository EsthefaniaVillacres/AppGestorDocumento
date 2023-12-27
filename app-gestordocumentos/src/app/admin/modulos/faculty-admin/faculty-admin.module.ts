import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyAdminRoutingModule } from './faculty-admin-routing.module';
import { PagFacultyAdminComponent } from './pag-faculty-admin/pag-faculty-admin.component';
import { TabFacultyAdminComponent } from './componentes/tab-faculty-admin/tab-faculty-admin.component';
import { FormFacultyAdminComponent } from './componentes/form-faculty-admin/form-faculty-admin.component';
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
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';

@NgModule({
  declarations: [
    PagFacultyAdminComponent,
    TabFacultyAdminComponent,
    FormFacultyAdminComponent
  ],
  imports: [
    CommonModule,
    FacultyAdminRoutingModule,
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
    ReactiveFormsModule
  ],
  exports: [
    PagFacultyAdminComponent,
    TabFacultyAdminComponent,
    FormFacultyAdminComponent
  ]
})
export class FacultyAdminModule { }
