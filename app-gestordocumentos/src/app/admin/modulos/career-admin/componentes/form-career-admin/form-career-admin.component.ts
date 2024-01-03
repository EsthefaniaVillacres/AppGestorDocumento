import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CareerService } from 'src/app/servicios/api/career.service';
import { FacultyService } from 'src/app/servicios/api/faculty.service';

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
  IdUser: any = localStorage.getItem('dato')
  faculties: any
  selectedFaculty: any

  constructor(private careerService: CareerService, private messageService: MessageService, private facultyServices: FacultyService) { }
  ngOnInit() {
    this.getFacultiesByUser()
  }
  hideDialog() {
    this.onClick.emit()
    this.dataDialog = false
   this.submitted = false
  }
  showDialog(){
    if (this.data.IdFaculty) {
      this.selectedFaculty={Id:this.data.IdFaculty, Nombre:this.data.Facultad}
    }
    
  }
  getFacultiesByUser() {
    this.facultyServices.getAllByUser(this.IdUser).subscribe(result => {
      this.faculties = result
    })
  }

  save() {
    this.submitted = true;
    if (this.data.Codigo?.trim()) {
      this.data.IdFaculty=this.selectedFaculty.Id
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
