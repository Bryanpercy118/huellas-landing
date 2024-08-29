import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';  // Ajusta la ruta si es necesario

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html'
})
export class LoginViewComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  // Método para manejar el envío del formulario de inicio de sesión
  onSubmit() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password);
    } else {
      alert('Por favor, ingresa un correo electrónico y contraseña válidos.');
    }
  }

  // Método para iniciar sesión con Google
  loginWithGoogle() {
    this.authService.signInWithGoogle();
  }
}
