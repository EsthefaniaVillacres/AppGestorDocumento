import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/servicios/api/user.service';

@Component({
  selector: 'app-form-user-admin',
  templateUrl: './form-user-admin.component.html',
  styleUrls: ['./form-user-admin.component.css']
})
export class FormUserAdminComponent {
  @Input() data: any
  @Input() dataDialog!: boolean
  @Output() onClick:EventEmitter<any>= new EventEmitter<any>()
  submitted: boolean = false

  constructor(private userService: UserService, private messageService:MessageService) {


  }
  ngOnInit(){

  }
  hideDialog() {
    this.onClick.emit()
    this.dataDialog = false
    this.submitted = false

    
  }


  save() {
    this.submitted = true;

    if (this.data.name?.trim()) {
      if (this.data.id) {
        this.update(this.data);

      } else {
       this.create(this.data);
      }
      this.dataDialog = false;
      this.data = {};
    }
  }
  create(row: any) {
    console.log('impresion del create');
    console.log(row);
    row.IdPerfil=2
    this.userService.create(row).subscribe(result => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro creado', life: 3000 });
    })
  }
  update(row: any) {
    this.userService.update(row,row.id).subscribe(resul=>{
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro actualizado', life: 3000 });

    })
  }

}
