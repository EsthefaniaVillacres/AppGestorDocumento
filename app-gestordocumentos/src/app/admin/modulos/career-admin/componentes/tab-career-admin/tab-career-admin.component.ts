import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CareerService } from 'src/app/servicios/api/career.service';

@Component({
  selector: 'app-tab-career-admin',
  templateUrl: './tab-career-admin.component.html',
  styleUrls: ['./tab-career-admin.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TabCareerAdminComponent {
  selectedListData: any
  dataDialog: boolean = false
  data: any
  mostrar: boolean = false
  listData: any
  visible:boolean=false
  mostrarUsuarios: boolean = false 
  mostrarPlantillas: boolean = false
  idUser:any=localStorage.getItem('dato')
  constructor(private careerService: CareerService, private confirmationService: ConfirmationService, private messageService: MessageService) {

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
    this.careerService.getAllByUser(this.idUser).subscribe(result => {
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
      message: '¿Esta seguro que desea eliminar el registro: ' + row.Codigo + '?',
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
    this.careerService.delete(row.Id).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
      this.getListData()
    })
  }
  asignedManager(row:any){
    this.data={...row}
    this.visible=true
    this.mostrarUsuarios=true

  }
  hideDialogManage(){
    this.visible=false
    this.mostrarUsuarios=false

  }
  asignedTemplate(row:any){
    this.data={...row}
    this.visible=true
    this.mostrarPlantillas=true

  }
  hideDialogTemplate(){
    this.visible=false
    this.mostrarPlantillas=false

  }
}
