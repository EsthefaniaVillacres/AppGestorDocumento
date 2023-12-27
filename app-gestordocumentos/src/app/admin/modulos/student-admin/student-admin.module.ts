import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentAdminRoutingModule } from './student-admin-routing.module';
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
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { PagStudentAdminComponent } from './pag-student-admin/pag-student-admin.component';
import { TabStudentAdminComponent } from './componentes/tab-student-admin/tab-student-admin.component';
import { FormStudentAdminComponent } from './componentes/form-student-admin/form-student-admin.component';

@NgModule({
  declarations: [
    PagStudentAdminComponent,
    TabStudentAdminComponent,
    FormStudentAdminComponent
  ],
  imports: [
    CommonModule,
    StudentAdminRoutingModule,
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
    PagStudentAdminComponent,
    TabStudentAdminComponent,
    FormStudentAdminComponent
  ]
})
export class StudentAdminModule { }
