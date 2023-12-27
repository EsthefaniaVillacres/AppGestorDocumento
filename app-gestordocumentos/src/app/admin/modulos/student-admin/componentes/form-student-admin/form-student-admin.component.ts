import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { StudentService } from 'src/app/servicios/api/student.service';

@Component({
  selector: 'app-form-student-admin',
  templateUrl: './form-student-admin.component.html',
  styleUrls: ['./form-student-admin.component.css']
})
export class FormStudentAdminComponent {
  @Input() data: any
  @Input() dataDialog!: boolean
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()
  submitted: boolean = false

  constructor(private studentService: StudentService, private messageService: MessageService) {


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
    if (this.data.Cedula?.trim()) {
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
    this.studentService.create(row).subscribe(result => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro creado', life: 3000 });
    })
  }
  update(row: any) {
    this.studentService.update(row, row.Id).subscribe(resul => {
      this.onClick.emit()
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro actualizado', life: 3000 });

    })
  }
}
