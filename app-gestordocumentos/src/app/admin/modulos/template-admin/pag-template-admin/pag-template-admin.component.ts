import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TemplateService } from 'src/app/servicios/api/template.service';

@Component({
  selector: 'app-pag-template-admin',
  templateUrl: './pag-template-admin.component.html',
  styleUrls: ['./pag-template-admin.component.css'],
  providers: [MessageService, ConfirmationService]
})
export class PagTemplateAdminComponent {
  listTemplate: any
  listDetail:any
  template: any
  detail:any
  submitted: boolean = false
  templateDialog: boolean = false
  detailDialog:boolean=false
  idTemplateSelected:number=0
  nameTemplateSelected:string=''
  mostrar:boolean=false
  constructor(private templateServices: TemplateService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
  getListTemplate() {
    this.templateServices.getAll().subscribe(result => {
      this.listTemplate = result
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
  getListDetail(id:any,name:string) {
    this.idTemplateSelected=id
    this.nameTemplateSelected=name
    this.templateServices.getDetByIdTemplateCab(id).subscribe(result => {
      this.listDetail = result
      this.mostrar=true
      
    })
  }
  ngOnInit() {
    this.getListTemplate()
  }
  openFormTemplate() {
    this.templateDialog = true
    this.template = {}
  }
  openFormDetail() {
    this.detailDialog = true
    this.detail = {IdTemplateCab:this.idTemplateSelected}
  }
  hideDialogTemplate() {
    this.templateDialog = false
    this.template = {}
    this.getListTemplate()
    this.submitted = false;
  }
  hideDialogDetail() {
    this.detailDialog = false
    this.detail = {}
    this.getListDetail(this.idTemplateSelected,this.nameTemplateSelected)
    this.submitted = false;
  }
  saveTemplate() {
    this.submitted = true;
    if (this.template.Nombre?.trim()) {
      if (this.template.Id) {
        this.updateTemplate(this.template)
      } else {
        this.createTemplate(this.template)
      }
    }
  }
  saveDetail() {
    this.submitted = true;
    if (this.detail.NombreCarpeta?.trim()) {
      if (this.detail.Id) {
        this.updatedetail(this.detail)
      } else {
        this.createDetail(this.detail)
      }
    }
  }
  createTemplate(row: any) {
    this.templateServices.createCab(row).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro creado', life: 3000 });
      this.hideDialogTemplate()
    })

  }
  updateTemplate(row: any) {
    this.templateServices.updateCab(row, row.Id).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro actualizado', life: 3000 });
      this.hideDialogTemplate()
    })
  }
  createDetail(row: any) {
    this.templateServices.createDet(row).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro creado', life: 3000 });
      this.hideDialogDetail()
    })

  }
  updatedetail(row: any) {
    this.templateServices.updateDet(row, row.Id).subscribe(result => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro actualizado', life: 3000 });
      this.hideDialogDetail()
    })
  }
  editTemplate(row: any) {
    this.template = { ...row };
    this.templateDialog = true;
  }
  editDetail(row: any) {
    this.detail = { ...row };
    this.detailDialog = true;
  }
  deleteTemplate(row: any) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar ' + row.Nombre + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
        this.templateServices.deleteCab(row.Id).subscribe(result => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
          this.getListTemplate()
        })
      }
    });

  }
  deleteDetail(row: any) {
    this.confirmationService.confirm({
      message: '¿Esta seguro que desea eliminar ' + row.NombreCarpeta + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sí',
      accept: () => {
        this.templateServices.deleteDet(row.Id).subscribe(result => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro eliminado', life: 3000 });
          this.getListDetail(this.idTemplateSelected,this.nameTemplateSelected)
        })
      }
    });

  }

}
