import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumoApiService } from '../../services/consumo-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-contrasenia',
  templateUrl: './cambiar-contrasenia.component.html',
  styleUrls: ['./cambiar-contrasenia.component.scss']
})
export class CambiarContraseniaComponent {

  miFormulario: FormGroup;
  mensajeError: boolean = false;
  mensajeExito: boolean = false;
  mensajeNoEncontrado: boolean = false;

  constructor(private apiService: ConsumoApiService, private router: Router) {
    this.miFormulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  cambiarContrasenia() {
    if (this.miFormulario.invalid) {
      this.mensajeError = true;
      setTimeout(() => this.mensajeError = false, 3000); // Oculta el mensaje después de 3 segundos
      return;
    }

    this.apiService.actualizarContra(this.miFormulario.value.email, this.miFormulario.value.password).subscribe(
      response => {
        if (response.status === 'success') {
          this.mensajeExito = true;
          setTimeout(() => {
            this.mensajeExito = false;
            this.router.navigate(['/login']); // Redirige al login después de 3 segundos
          }, 3000);
        } else {
          this.mensajeNoEncontrado = true;
          setTimeout(() => this.mensajeNoEncontrado = false, 3000);
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
        this.mensajeError = true;
        setTimeout(() => this.mensajeError = false, 3000);
      }
    );
  }
}
