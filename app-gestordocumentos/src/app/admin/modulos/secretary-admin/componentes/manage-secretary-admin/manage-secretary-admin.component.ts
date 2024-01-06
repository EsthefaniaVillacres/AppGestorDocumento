import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ManagecareerService } from 'src/app/servicios/api/managecareer.service';

@Component({
  selector: 'app-manage-secretary-admin',
  templateUrl: './manage-secretary-admin.component.html',
  styleUrls: ['./manage-secretary-admin.component.css']
})
export class ManageSecretaryAdminComponent {

  @Input() visible!: boolean
  @Input() data: any
  @Output() onClick:EventEmitter<any>= new EventEmitter<any>()
  faculties: any
  unfaculties: any
  idUser:any=localStorage.getItem('dato')
  constructor(private managecareer: ManagecareerService) {

  }
  ngOnInit() {
    this.getCareerAsigned()
    this.getCareerUnasigned()

  }
  getCareerAsigned() {
    this.managecareer.getCareerAsignedByUser(this.data.id).subscribe(result => {
      this.faculties = result
    })

  }
  getCareerUnasigned() {
    this.managecareer.getCareerUnasignedByUser(this.data.id,this.idUser).subscribe(result => {
      this.unfaculties = result
      console.log(result)
    })
  }
  addCareerManage(row: any) {
    let register: any = {}
    register.IdCareer = row.Id
    register.IdUser = this.data.id
    console.log(register);
    
    this.managecareer.create(register).subscribe(result => {
      this.getCareerAsigned()
      this.getCareerUnasigned()
    })

  }
  minusCareerManage(row: any) {
    this.managecareer.delete(this.data.id,row.Id).subscribe(result => {
      this.getCareerAsigned()
      this.getCareerUnasigned()
    })
  }
  hideDialog(){
    this.onClick.emit()

  }
}
