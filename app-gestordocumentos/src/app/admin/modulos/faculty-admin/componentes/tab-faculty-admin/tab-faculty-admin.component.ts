import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FacultyService } from 'src/app/servicios/api/faculty.service';

@Component({
  selector: 'app-tab-faculty-admin',
  templateUrl: './tab-faculty-admin.component.html',
  styleUrls: ['./tab-faculty-admin.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TabFacultyAdminComponent {
  selectedListData: any
  dataDialog: boolean = false
  data: any
  mostrar: boolean = false
  listData: any
  constructor(private facultyService: FacultyService, private confirmationService: ConfirmationService, private messageService: MessageService) {

  }
  ngOnInit() {
    this.getListData()
  }
  openNew() {
    this.mostrar = true
    this.data = {}
    this.dataDialog = true
  }
  hideDialog() {
    this.data = {}
    this.mostrar = false
    this.dataDialog = false
    this.getListData()
  }
  getListData() {
    this.facultyService.getAll().subscribe(result => {
      this.listData = result

    })
  }
  edit(row: any) {
    this.mostrar = true
    this.data = { ...row }
    this.dataDialog = true
  }
  deleteRow(row: any) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar el registro: ' + row.Codigo + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.delete(row)
        this.data = {};
      }
    });
  }
  delete(row: any) {
    this.facultyService.delete(row.Id).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
      this.getListData()
    })
  }
}
