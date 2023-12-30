import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  seleccionado: boolean = false
  contraerSelected: boolean = false
  listaMenu: any[] = []
  idPerfil: string | null = ''
  listMenuSuperAdmin: any[] = []
  listMenuManage: any[] = []
  listMenuSecretary: any[] = []
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  llenarListaMenu() {
    switch (this.idPerfil) {
      case '1':
        this.listaMenu = this.listMenuSuperAdmin
        break;
      case '2':
        this.listaMenu = this.listMenuManage
        break;
      case '3':
        this.listaMenu = this.listMenuSecretary
        break;
      default:
        break;
    }

  }



  seleccionar(a: any) {
    this.listaMenu.forEach(i => i.Seleccionado = false)
    a.Seleccionado = !a.Seleccionado

  }
  contraer() {
    this.contraerSelected = !this.contraerSelected
    this.onClick.emit(this.contraerSelected);
  }
  ngOnInit() {
    this.idPerfil = localStorage.getItem('IdPerfil')
    this.listMenuSuperAdmin = [
      { 'Id': 1, 'Nombre': 'Administradores', 'Logo': 'fa-regular fa-hand', 'Seleccionado': false, 'route': 'managers' },
      { 'Id': 2, 'Nombre': 'Facultades', 'Logo': 'fa-solid fa-building-columns', 'Seleccionado': false, 'route': 'faculties' },
      { 'Id': 3, 'Nombre': 'Cargos Indirectos', 'Logo': 'fa-solid fa-file-invoice-dollar', 'Seleccionado': false, 'route': 'cargos' }]
    this.listMenuManage = [
      { 'Id': 1, 'Nombre': 'Secretarias', 'Logo': 'fa-regular fa-hand', 'Seleccionado': false, 'route': 'secretaries' },
      { 'Id': 2, 'Nombre': 'Carreras', 'Logo': 'fa-solid fa-users', 'Seleccionado': false, 'route': 'careers' },
      { 'Id': 3, 'Nombre': 'Plantillas', 'Logo': 'fa-solid fa-percent', 'Seleccionado': false, 'route': 'templates' },
      { 'Id': 4, 'Nombre': 'Cargos Indirectos', 'Logo': 'fa-solid fa-file-invoice-dollar', 'Seleccionado': false, 'route': 'cargos' }]
    this.listMenuSecretary = [
      { 'Id': 1, 'Nombre': 'Estudiantes', 'Logo': 'fa-solid fa-business-time', 'Seleccionado': false, 'route': 'students' },
      { 'Id': 2, 'Nombre': 'Cargos Indirectos', 'Logo': 'fa-solid fa-file-invoice-dollar', 'Seleccionado': false, 'route': 'cargos' }]
    this.listaMenu = [
      { 'Id': 1, 'Nombre': 'Usuarios', 'Logo': 'fa-regular fa-hand', 'Seleccionado': false, 'route': 'users' },
      { 'Id': 2, 'Nombre': 'Facultades', 'Logo': 'fa-solid fa-building-columns', 'Seleccionado': false, 'route': 'faculties' },
      { 'Id': 3, 'Nombre': 'Carreras', 'Logo': 'fa-solid fa-users', 'Seleccionado': false, 'route': 'careers' },
      { 'Id': 4, 'Nombre': 'Estudiantes', 'Logo': 'fa-solid fa-business-time', 'Seleccionado': false, 'route': 'students' },
      { 'Id': 5, 'Nombre': 'Plantillas', 'Logo': 'fa-solid fa-percent', 'Seleccionado': false, 'route': 'templates' },
      { 'Id': 6, 'Nombre': 'Cargos Indirectos', 'Logo': 'fa-solid fa-file-invoice-dollar', 'Seleccionado': false, 'route': 'cargos' }]
    this.llenarListaMenu()

  }
}
