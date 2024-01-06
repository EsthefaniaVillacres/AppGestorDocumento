import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TemplatecareerService } from 'src/app/servicios/api/templatecareer.service';

@Component({
  selector: 'app-template-career-admin',
  templateUrl: './template-career-admin.component.html',
  styleUrls: ['./template-career-admin.component.css']
})
export class TemplateCareerAdminComponent {
  @Input() visible!: boolean
  @Input() data: any
  @Output() onClick:EventEmitter<any>= new EventEmitter<any>()
  users: any
  unusers: any
  constructor(private templatecareer: TemplatecareerService) {

  }
  ngOnInit() {
    this.getTemplateAsigned()
    this.getTemplateUnasigned()

  }
  getTemplateAsigned() {
    this.templatecareer.getTemplateAsignedByCareer(this.data.Id).subscribe(result => {
      this.users = result
    })

  }
  getTemplateUnasigned() {
    this.templatecareer.getTemplateUnasignedByCareer(this.data.Id).subscribe(result => {
      this.unusers = result
    })
  }
  addUserManage(row: any) {
    let register: any = {}
    register.IdCareer= this.data.Id
    register.IdTemplateCab = row.Id
    this.templatecareer.create(register).subscribe(result => {
      this.getTemplateAsigned()
      this.getTemplateUnasigned()
    })

  }
  minusUserManage(row: any) {
    this.templatecareer.delete(this.data.Id,row.Id).subscribe(result => {
      this.getTemplateAsigned()
      this.getTemplateUnasigned()
    })
  }
  hideDialog(){
    this.onClick.emit()

  }
}
