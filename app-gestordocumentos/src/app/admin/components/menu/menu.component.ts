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
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  llenarListaMenu() {
    this.listaMenu = [
      { 'Id': 1, 'Nombre': 'Usuarios', 'Logo': 'fa-regular fa-hand', 'Seleccionado': false, 'route': 'users' },
      { 'Id': 2, 'Nombre': 'Facultades', 'Logo': 'fa-solid fa-building-columns', 'Seleccionado': false, 'route': 'faculties' },
      { 'Id': 3, 'Nombre': 'Carreras', 'Logo': 'fa-solid fa-users', 'Seleccionado': false, 'route': 'careers' },
      { 'Id': 3, 'Nombre': 'Segmentos', 'Logo': 'fa-solid fa-business-time', 'Seleccionado': false, 'route': 'segmentos' },
      { 'Id': 3, 'Nombre': 'Tasas de Interes', 'Logo': 'fa-solid fa-percent', 'Seleccionado': false, 'route': 'tasas' },
      { 'Id': 3, 'Nombre': 'Cargos Indirectos', 'Logo': 'fa-solid fa-file-invoice-dollar', 'Seleccionado': false, 'route': 'cargos' }]
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
    this.llenarListaMenu()
    console.log(this.listaMenu)
  }
}
