import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
})
export class RegisterViewComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.email && this.password) {
      this.authService.register(this.email, this.password);
    }
  }
}
