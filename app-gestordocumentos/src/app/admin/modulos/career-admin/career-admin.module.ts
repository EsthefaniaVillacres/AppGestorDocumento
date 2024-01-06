import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerAdminRoutingModule } from './career-admin-routing.module';
import { PagCareerAdminComponent } from './pag-career-admin/pag-career-admin.component';
import { TabCareerAdminComponent } from './componentes/tab-career-admin/tab-career-admin.component';
import { FormCareerAdminComponent } from './componentes/form-career-admin/form-career-admin.component';
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
import { ManageCareerAdminComponent } from './componentes/manage-career-admin/manage-career-admin.component';
import { SplitterModule } from 'primeng/splitter';
import { TemplateCareerAdminComponent } from './componentes/template-career-admin/template-career-admin.component';

@NgModule({
  declarations: [
    PagCareerAdminComponent,
    TabCareerAdminComponent,
    FormCareerAdminComponent,
    ManageCareerAdminComponent,
    TemplateCareerAdminComponent
  ],
  imports: [
    CommonModule,
    CareerAdminRoutingModule,
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
    PagCareerAdminComponent,
    TabCareerAdminComponent,
    FormCareerAdminComponent,
    ManageCareerAdminComponent,
    TemplateCareerAdminComponent
  ]
})
export class CareerAdminModule { }
