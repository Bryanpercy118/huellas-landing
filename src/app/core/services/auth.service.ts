import { Injectable } from "@angular/core";
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {

    constructor(private fireauth: Auth, private router: Router) {}

    // Método para iniciar sesión con correo y contraseña
    login(email: string, password: string) {
        signInWithEmailAndPassword(this.fireauth, email, password)
            .then((userCredential) => {
                console.log('User signed in successfully');
                localStorage.setItem('token', 'true');
                this.router.navigate(['/Platform/dashboard']);
            })
            .catch((error) => {
                alert('Algo no funciono como esperábamos');
                console.error('Error during sign in:', error.message);
            });
    }

    // Método para registrar un nuevo usuario
    register(email: string, password: string) {
        createUserWithEmailAndPassword(this.fireauth, email, password)
            .then((userCredential) => {
                console.log('User registered successfully');
                localStorage.setItem('token', 'true');
                this.router.navigate(['/Platform/dashboard']);
            })
            .catch((error) => {
                alert('Error al registrar. Inténtalo de nuevo.');
                console.error('Error during registration:', error.message);
            });
    }

    registerWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(this.fireauth, provider)
          .then((result) => {
            console.log('User registered/logged in with Google successfully');
            localStorage.setItem('token', 'true');
            this.router.navigate(['/Platform/dashboard']);
          })
          .catch((error) => {
            alert('Algo no funciono como esperabamos');
            console.error('Error during Google sign in:', error.message);
          });
      }

    // Método para iniciar sesión con Google
    signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(this.fireauth, provider)
            .then((result) => {
                console.log('User signed in with Google');
                localStorage.setItem('token', 'true');
                this.router.navigate(['/platform/dashboard']);
            })
            .catch((error) => {
                alert('Error al iniciar sesión con Google.');
                console.error('Error during Google sign in:', error.message);
            });
    }

    // Método para cerrar sesión
    logout() {
        this.fireauth.signOut()
            .then(() => {
                localStorage.removeItem('token');
                this.router.navigate(['/login']);
            })
            .catch((error) => {
                alert('Error al cerrar sesión.');
                console.error('Error during logout:', error.message);
            });
    }
}
