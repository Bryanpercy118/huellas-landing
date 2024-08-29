import { NgModule } from "@angular/core";
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { RegisterViewComponent } from './auth/register-view/register-view.component';
import { PlatformRoutingModule } from "./platform-routing.module";


@NgModule({
    declarations: [
      
    
    LoginViewComponent,
    RegisterViewComponent
  ],
    imports: [
     PlatformRoutingModule
      
    ]
  })
  export class PlatformModule { }
  