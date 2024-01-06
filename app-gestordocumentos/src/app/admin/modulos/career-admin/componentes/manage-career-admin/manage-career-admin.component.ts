import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ManagecareerService } from 'src/app/servicios/api/managecareer.service';


@Component({
  selector: 'app-manage-career-admin',
  templateUrl: './manage-career-admin.component.html',
  styleUrls: ['./manage-career-admin.component.css']
})
export class ManageCareerAdminComponent {
  @Input() visible!: boolean
  @Input() data: any
  @Output() onClick:EventEmitter<any>= new EventEmitter<any>()
  users: any
  unusers: any
  constructor(private managecareer: ManagecareerService) {

  }
  ngOnInit() {
    this.getUserAsigned()
    this.getUserUnasigned()

  }
  getUserAsigned() {
    this.managecareer.getUserAsignedByCareer(this.data.Id).subscribe(result => {
      this.users = result
    })

  }
  getUserUnasigned() {
    this.managecareer.getUserUnasignedByCareer(this.data.Id).subscribe(result => {
      this.unusers = result
    })
  }



  addUserManage(row: any) {
    let register: any = {}
    register.IdCareer= this.data.Id
    register.IdUser = row.id
    this.managecareer.create(register).subscribe(result => {
      this.getUserAsigned()
      this.getUserUnasigned()
    })

  }
  minusUserManage(row: any) {
    this.managecareer.delete(row.id,this.data.Id,).subscribe(result => {
      this.getUserAsigned()
      this.getUserUnasigned()
    })
  }
  hideDialog(){
    this.onClick.emit()

  }
}
