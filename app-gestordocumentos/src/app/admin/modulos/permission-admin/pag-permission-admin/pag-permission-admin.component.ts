import { Component } from '@angular/core';
import { ManagecareerService } from 'src/app/servicios/api/managecareer.service';
import { PermissionfolderService } from 'src/app/servicios/api/permissionfolder.service';
import { PermissiontemplateService } from 'src/app/servicios/api/permissiontemplate.service';
import { UserService } from 'src/app/servicios/api/user.service';

@Component({
  selector: 'app-pag-permission-admin',
  templateUrl: './pag-permission-admin.component.html',
  styleUrls: ['./pag-permission-admin.component.css']
})
export class PagPermissionAdminComponent {
  selectedListSecretaries: any
  listSecretaries: any
  IdPerfil: any = localStorage.getItem('IdPerfil')
  selectSecretary: any
  carreras: any
  plantillas: any
  selectManageCareer: any
  carpetas: any
  selectPermisoTemplate: any
  dataDialog!: boolean
  submitted: boolean = false
  selectFolder: any
  selectPermisosFolder: any
  checkedCarga: boolean = false
  checkedDescarga: boolean = false
  checkedVista: boolean = false
  checkedEliminado: boolean = false
  selectPermisosFolderTemp: any
  constructor(private userService: UserService, private managecareer: ManagecareerService, private permissiontemplate: PermissiontemplateService, private permissionfolder: PermissionfolderService) { }
  ngOnInit() {
    this.getListData()
  }
  getListData() {
    this.userService.getAllByIdPerfil(this.IdPerfil).subscribe(result => {
      this.listSecretaries = result

    })
  }
  showCareerAsigned(row: any) {
    this.getCarreras(row)
    this.selectSecretary = row


  }
  getCarreras(row: any) {
    this.managecareer.getManageCareerBySecretary(row.id).subscribe(result => {
      this.carreras = result

    })
  }
  getPlantillas(row: any) {
    this.permissiontemplate.getTemplatesByManageCareer(row.Id, row.IdCareer).subscribe(result => {
      this.plantillas = result
      console.log(result);

    })
  }
  showTemplate(row: any) {
    this.getPlantillas(row)
    this.selectManageCareer = row

  }
  permitirAcceso(row: any) {
    let register: any = {}
    register.IdManageCareer = this.selectManageCareer.Id
    register.IdTemplateCab = row.IdTemplateCab
    this.permissiontemplate.create(register).subscribe(result => {
      alert('Se registro correctamente ')
      this.getPlantillas(this.selectManageCareer)
    })
  }
  denegarAcceso(row: any) {

  }
  editarAcceso(row: any) {
    this.getPermisosTemplateByParameters(row)


  }
  getPermisosTemplateByParameters(row: any) {
    this.permissiontemplate.getPermissionTemplateByParameters(this.selectManageCareer.Id, row.IdTemplateCab).subscribe(result => {
      this.selectPermisoTemplate = result[0]
      this.getCarpetas(result[0])
    })
  }
  getCarpetas(row: any) {
    this.permissionfolder.getFoldersByTemplate(row.Id, row.IdTemplateCab).subscribe(result => {
      this.carpetas = result
    })
  }
  hideDialog() {
    this.dataDialog = false
    this.submitted = false
  }
  showDialog(row: any) {
    this.getPermisosFolderByParameters(row)

  }
  getPermisosFolderByParameters(row: any) {

    this.selectPermisosFolderTemp = row
    this.permissionfolder.getPermissionFolderByParameters(this.selectPermisoTemplate.Id, row.Id).subscribe(result => {
      this.selectPermisosFolder = result[0]
      this.dataDialog = true
      console.log(result[0]);
      if (this.selectPermisosFolder && this.selectPermisosFolder.Id) {
        this.asignarCheckBox(this.selectPermisosFolder)
      } else {
        this.iniciarCheckBox()
      }



    })
  }
  guardarPermisosFolder() {
    let register: any = {}
    register.IdPermissionTemplate = this.selectPermisoTemplate.Id
    register.IdTemplateDet = this.selectPermisosFolderTemp.Id
    register.Carga = this.checkedCarga
    register.Descarga = this.checkedDescarga
    register.Vista = this.checkedVista
    register.Eliminado = this.checkedEliminado
    if (this.selectPermisosFolder && this.selectPermisosFolder.Id) {
      register.Id = this.selectPermisosFolder.Id
      this.updatePermissionFolder(register)
    } else {
      this.createPermissionFolder(register)
    }
    this.hideDialog()
    
  }
  createPermissionFolder(row: any) {
    this.permissionfolder.create(row).subscribe(result => {
      alert('registro creado satisfactoreamente')
      this.getCarpetas(this.selectPermisoTemplate)
    })
  }
  iniciarCheckBox() {
    this.checkedCarga = false
    this.checkedDescarga = false
    this.checkedVista = false
    this.checkedEliminado = false
  }
  asignarCheckBox(row: any) {
    this.checkedCarga = !!row.Carga
    console.log(this.checkedCarga);
    console.log(row.Carga);

    this.checkedDescarga = !!row.Descarga
    this.checkedVista = !!row.Vista
    this.checkedEliminado = !!row.Eliminado
  }
  updatePermissionFolder(row: any) {
    this.permissionfolder.update(row, row.Id).subscribe(result => {
      alert('Registro actualizado con éxito')
      this.getCarpetas(this.selectPermisoTemplate)
    })

  }
}
