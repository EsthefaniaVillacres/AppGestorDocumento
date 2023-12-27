import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CareerService } from 'src/app/servicios/api/career.service';

@Component({
  selector: 'app-form-career-admin',
  templateUrl: './form-career-admin.component.html',
  styleUrls: ['./form-career-admin.component.css']
})
export class FormCareerAdminComponent {
  @Input() data: any
  @Input() dataDialog!: boolean
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  submitted: boolean = false

  constructor(private careerService: CareerService, private messageService: MessageService) {


  }
  ngOnInit() {

  }
  hideDialog() {
    this.onClick.emit()
    this.dataDialog = false
    this.submitted = false


  }


  save() {
    this.submitted = true;
    if (this.data.Codigo?.trim()) {
      if (this.data.Id) {
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
    row.IdPerfil = 2
    this.careerService.create(row).subscribe(result => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro creado', life: 3000 });
    })
  }
  update(row: any) {
    this.careerService.update(row, row.Id).subscribe(resul => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro actualizado', life: 3000 });

    })
  }
}
