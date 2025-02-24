import { Component } from '@angular/core';
import { ConsumoApiService } from '../../services/consumo-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Importamos el servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  miFormulario: FormGroup;
  formularioIncorrecto = false;

  constructor(public apiService: ConsumoApiService, private router: Router, private authService: AuthService) { 
    this.miFormulario = new FormGroup({
          user: new FormControl('', [Validators.required]),
          contraseña: new FormControl('', [Validators.required, Validators.minLength(6)]),
          correo: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  mensajeError: boolean = false;

  iniciarSesion() {
    if (this.miFormulario.invalid) {
      this.formularioIncorrecto = true;
      setTimeout(() => {
        this.formularioIncorrecto = false;
      }, 3000); // Ocultar después de 3 segundos
      return;
    }
  
    this.apiService.iniciarSesion(this.miFormulario.value.user, this.miFormulario.value.password).subscribe(
      response => {
        if (response.status === 'success') {
          this.apiService.user = response.data;
          this.apiService.token = response.token;
          this.authService.login(this.apiService.user.nombre);
         
          this.router.navigate(['']);
        } else {
          this.mensajeError = true;
          setTimeout(() => {
            this.mensajeError = false;
          }, 3000); // Desaparece después de 3 segundos
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
        this.mensajeError = true;
        setTimeout(() => {
          this.mensajeError = false;
        }, 3000); // Desaparece después de 3 segundos
      }
    );
  }
  
}
