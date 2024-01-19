import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"; 
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';
//azure
import { MsalModule, MsalRedirectComponent,MsalGuard,MsalInterceptor, } from "@azure/msal-angular";
import { PublicClientApplication,InteractionType, } from "@azure/msal-browser";

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    AdminModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: "585561ba-e9f7-41f4-a20f-9d36ba11c89e", // Application (client) ID from the app registration
          authority:
            "https://login.microsoftonline.com/a988ccd4-00ed-4bf3-a4d1-b5661f44abdf", // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
          redirectUri: "http://localhost:4200/admin", // This is your redirect URI
        },
        cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
        },
      }),
      {
        interactionType: InteractionType.Redirect, // MSAL Guard Configuration
        authRequest: {
          scopes: ["user.read"],
        },
      },
      {
        interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
        protectedResourceMap: new Map([
          ["https://graph.microsoft.com/v1.0/me", ["user.read"]],
        ]),
      }
    ),
  ],
  providers: [     {
    provide: HTTP_INTERCEPTORS,
    useClass: MsalInterceptor,
    multi: true,
  },
  MsalGuard,],
  bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }
