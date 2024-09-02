import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { CourseComponent } from '../course/course.component';
import { ProfileComponent } from '../profile/profile.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service'; // Importa AuthService

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HomeComponent, CourseComponent, RouterLink, RouterOutlet, ProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService) {} // Inyecta el servicio

  // Método para manejar el logout
  onLogout() {
    this.authService.logout();
  }
}
