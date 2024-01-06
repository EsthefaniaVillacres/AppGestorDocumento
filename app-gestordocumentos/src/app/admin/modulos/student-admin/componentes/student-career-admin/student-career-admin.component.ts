import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StudentcareerService } from 'src/app/servicios/api/studentcareer.service';

@Component({
  selector: 'app-student-career-admin',
  templateUrl: './student-career-admin.component.html',
  styleUrls: ['./student-career-admin.component.css']
})
export class StudentCareerAdminComponent {

  @Input() visible!: boolean
  @Input() data: any
  @Output() onClick:EventEmitter<any>= new EventEmitter<any>()
  faculties: any
  unfaculties: any
  idUser:any=localStorage.getItem('dato')
  constructor(private studentcareer: StudentcareerService) {

  }
  ngOnInit() {
    this.getCareerAsigned()
    this.getCareerUnasigned()

  }
  getCareerAsigned() {
    this.studentcareer.getCareerAsignedByStudent(this.data.Id).subscribe(result => {
      this.faculties = result
    })

  }
  getCareerUnasigned() {
    this.studentcareer.getCareerUnasignedByStudent(this.data.Id,this.idUser).subscribe(result => {
      this.unfaculties = result
      console.log(result)
    })
  }
  addCareerManage(row: any) {
    let register: any = {}
    register.IdCareer = row.Id
    register.IdStudent = this.data.Id
    this.studentcareer.create(register).subscribe(result => {
      this.getCareerAsigned()
      this.getCareerUnasigned()
    })

  }
  minusCareerManage(row: any) {
    this.studentcareer.delete(row.Id,this.data.Id).subscribe(result => {
      this.getCareerAsigned()
      this.getCareerUnasigned()
    })
  }
  hideDialog(){
    this.onClick.emit()

  }
}
