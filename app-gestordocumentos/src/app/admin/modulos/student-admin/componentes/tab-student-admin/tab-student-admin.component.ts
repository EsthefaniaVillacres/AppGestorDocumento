import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { StudentService } from 'src/app/servicios/api/student.service';
import * as XLSX from 'xlsx';
import { read, utils } from 'xlsx';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}
@Component({
  selector: 'app-tab-student-admin',
  templateUrl: './tab-student-admin.component.html',
  styleUrls: ['./tab-student-admin.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TabStudentAdminComponent {
  selectedListData: any
  dataDialog: boolean = false
  data: any
  mostrar: boolean = false
  listData: any
  visible: boolean = false
  mostrarCarreras: boolean = false
  students: any
  rowStudent: any
  progress: boolean = false
  constructor(private studentService: StudentService, private confirmationService: ConfirmationService, private messageService: MessageService) {

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
    this.studentService.getAll().subscribe(result => {
      this.listData = result

    },
    (error) => {
      // Manejo de errores
      if (error.status === 401) {
        console.log('No autorizado. Redirigiendo al inicio de sesión.');
        window.location.href='login'
      } else {
        console.error('Error en la solicitud:', error);
      }
    })
  }
  edit(row: any) {
    this.mostrar = true
    this.data = { ...row }
    this.dataDialog = true
  }
  deleteRow(row: any) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar el registro: ' + row.Cedula + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
        this.delete(row)
        this.data = {};
      }
    });
  }
  delete(row: any) {
    this.studentService.delete(row.Id).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
      this.getListData()
    })
  }
  asignedManager(row: any) {
    this.data = { ...row }
    this.visible = true
    this.mostrarCarreras = true
  }
  hideDialogCarreras() {
    this.visible = false
    this.mostrarCarreras = false
  }
  onBasicUploadAuto = async ($event: any) => {
    this.progress = true;
    const files = $event.target.files;
  
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
  
      reader.onload = async (event: any) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;
  
        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          this.students = rows;
        }
  
        // Utiliza un bucle for...of para iterar de forma sincrónica
        for (const element of this.students) {
          await this.create(element);
        }
  
        this.progress = false;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registros agregados correctamente', life: 3000 });
        this.getListData();
      };
  
      reader.readAsArrayBuffer(file);
    }
  };
  
  create(row: any): Promise<any> {
    // Devuelve una promesa desde el método create
    return new Promise((resolve, reject) => {
      this.studentService.create(row).subscribe(
        (result) => {
          resolve(result);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
}
