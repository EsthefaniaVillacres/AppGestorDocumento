import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { BrowserUtils } from '@azure/msal-browser';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./core/core-routing.module').then((m)=>m.CoreRoutingModule)},
  {path:'login', loadChildren:()=>import('./core/core-routing.module').then((m)=>m.CoreRoutingModule)},
  {path:'admin', loadChildren:()=>import('./admin/admin-routing.module').then((m)=>m.AdminRoutingModule), canActivate: [MsalGuard],}
];
const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // Don't perform initial navigation in iframes or popups
    initialNavigation:
      !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup()
        ? "enabledNonBlocking"
        : "disabled", // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
