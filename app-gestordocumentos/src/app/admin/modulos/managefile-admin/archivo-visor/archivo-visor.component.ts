import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-archivo-visor',
  template: `
  <div *ngIf="archivoUrl">
    <iframe [src]="archivoUrl" width="100%" height="600px"></iframe>
  </div>
`,
  styleUrls: ['./archivo-visor.component.css']
})
export class ArchivoVisorComponent {
  @Input() archivoUrl: any;
}
