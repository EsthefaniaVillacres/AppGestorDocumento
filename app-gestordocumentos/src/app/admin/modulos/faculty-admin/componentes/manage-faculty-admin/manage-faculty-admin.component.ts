import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ManagefacultyService } from 'src/app/servicios/api/managefaculty.service';

@Component({
  selector: 'app-manage-faculty-admin',
  templateUrl: './manage-faculty-admin.component.html',
  styleUrls: ['./manage-faculty-admin.component.css']
})
export class ManageFacultyAdminComponent {
  @Input() visible!: boolean
  @Input() data: any
  @Output() onClick:EventEmitter<any>= new EventEmitter<any>()
  users: any
  unusers: any
  constructor(private managefaculty: ManagefacultyService) {

  }
  ngOnInit() {
    this.getUserAsigned()
    this.getUserUnasigned()

  }
  getUserAsigned() {
    this.managefaculty.getUserAsignedByFaculty(this.data.Id).subscribe(result => {
      this.users = result
    })

  }
  getUserUnasigned() {
    this.managefaculty.getUserUnasignedByFaculty(this.data.Id).subscribe(result => {
      this.unusers = result
    })
  }



  addUserManage(row: any) {
    let register: any = {}
    register.IdFaculty = this.data.Id
    register.IdUser = row.id
    this.managefaculty.create(register).subscribe(result => {
      this.getUserAsigned()
      this.getUserUnasigned()
    })

  }
  minusUserManage(row: any) {
    this.managefaculty.delete(row.id,this.data.Id,).subscribe(result => {
      this.getUserAsigned()
      this.getUserUnasigned()
    })
  }
  hideDialog(){
    this.onClick.emit()

  }

}
