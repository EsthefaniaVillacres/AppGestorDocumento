import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./core/core-routing.module').then((m)=>m.CoreRoutingModule)},
  {path:'login', loadChildren:()=>import('./core/core-routing.module').then((m)=>m.CoreRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
