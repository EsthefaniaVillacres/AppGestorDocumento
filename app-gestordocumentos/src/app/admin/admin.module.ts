import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PagPrincipalAdminComponent } from './pag-principal-admin/pag-principal-admin.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserAdminModule } from './modulos/user-admin/user-admin.module';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { FacultyAdminModule } from './modulos/faculty-admin/faculty-admin.module';
import { CareerAdminModule } from './modulos/career-admin/career-admin.module';


@NgModule({
  declarations: [
    PagPrincipalAdminComponent,
    CabeceraComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    FormsModule,
    RatingModule,
    BrowserAnimationsModule,
    CardModule,
    SharedModule,
    ListboxModule,
    ReactiveFormsModule,
    UserAdminModule,
    FacultyAdminModule,
    CareerAdminModule
  ],
  exports: [
    PagPrincipalAdminComponent,
    CabeceraComponent,
    MenuComponent
  ]
})
export class AdminModule { }
