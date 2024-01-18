import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from 'src/app/servicios/api/user.service';

@Component({
  selector: 'app-tab-secretary-admin',
  templateUrl: './tab-secretary-admin.component.html',
  styleUrls: ['./tab-secretary-admin.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class TabSecretaryAdminComponent {
  selectedListData: any
  dataDialog: boolean = false
  data: any
  mostrar: boolean = false
  listData: any
  IdPerfil: any = localStorage.getItem('IdPerfil')
  visible: boolean = false
  mostrarCarreras: boolean = false
  constructor(private userService: UserService, private confirmationService: ConfirmationService, private messageService: MessageService) {

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
    this.userService.getAllByIdPerfil(this.IdPerfil).subscribe(result => {
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
      message: '¿Esta seguro que desea eliminar el registro: ' + row.name + '?',
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
    this.userService.delete(row.id).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
      this.getListData()
    })
  }
  asignedManager(row: any) {
    this.data = { ...row }
    this.visible = true
    this.mostrarCarreras = true
  }
  hideDialogManage() {
    this.visible = false
    this.mostrarCarreras = false
  }
}
