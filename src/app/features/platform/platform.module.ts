import { NgModule } from "@angular/core";
import { LoginViewComponent } from './auth/login-view/login-view.component';
import { RegisterViewComponent } from './auth/register-view/register-view.component';
import { PlatformRoutingModule } from "./platform-routing.module";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
      
    
    LoginViewComponent,
    RegisterViewComponent
  ],
    imports: [
     PlatformRoutingModule,
     FormsModule  // <--- Añádelo aquí en la lista de imports
      
    ]
  })
  export class PlatformModule { }
  