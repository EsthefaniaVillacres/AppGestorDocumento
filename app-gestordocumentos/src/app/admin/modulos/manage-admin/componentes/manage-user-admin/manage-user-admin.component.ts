import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ManagefacultyService } from 'src/app/servicios/api/managefaculty.service';

@Component({
  selector: 'app-manage-user-admin',
  templateUrl: './manage-user-admin.component.html',
  styleUrls: ['./manage-user-admin.component.css']
})
export class ManageUserAdminComponent {
  @Input() visible!: boolean
  @Input() data: any
  @Output() onClick:EventEmitter<any>= new EventEmitter<any>()
  faculties: any
  unfaculties: any
  constructor(private managefaculty: ManagefacultyService) {

  }
  ngOnInit() {
    this.getFacultyAsigned()
    this.getFacultyUnasigned()

  }
  getFacultyAsigned() {
    this.managefaculty.getFacultyAsignedByUser(this.data.id).subscribe(result => {
      this.faculties = result
    })

  }
  getFacultyUnasigned() {
    this.managefaculty.getFacultyUnasignedByUser(this.data.id).subscribe(result => {
      this.unfaculties = result
    })
  }



  addFacultyManage(row: any) {
    let register: any = {}
    register.IdFaculty = row.Id
    register.IdUser = this.data.id
    console.log(register);
    
    this.managefaculty.create(register).subscribe(result => {
      this.getFacultyAsigned()
      this.getFacultyUnasigned()
    })

  }
  minusFacultyManage(row: any) {
    this.managefaculty.delete(this.data.id,row.Id).subscribe(result => {
      this.getFacultyAsigned()
      this.getFacultyUnasigned()
    })
  }
  hideDialog(){
    this.onClick.emit()

  }
}
