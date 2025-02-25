import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConsumoApiService } from '../../services/consumo-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {

  miFormulario: FormGroup;
  mensajeVisible: boolean = false;
  mensajeError: boolean = false;
  mensajeBaseDatos: boolean = false;

  constructor(private apiService: ConsumoApiService, private router: Router) {
    this.miFormulario = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(2)]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8}[ABCDEFGHJKLMNPQRSTVWXYZ]{1}$')]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      contraseña: new FormControl('', [Validators.required, Validators.minLength(6)]),
      telefono: new FormControl('', [Validators.required, Validators.pattern('^[6789]\\d{8}$')])
    });
  }

  registrarse() {
    if (this.miFormulario.invalid) {
      this.mensajeError = true;
      setTimeout(() => this.mensajeError = false, 3000);
      return;
    }

    this.apiService.registrarse(
      this.miFormulario.value.nombre,
      this.miFormulario.value.apellidos,
      this.miFormulario.value.dni,
      this.miFormulario.value.correo,
      this.miFormulario.value.contraseña,
      this.miFormulario.value.telefono).subscribe({
        next: (response) => {
          if (response.status === "success") {
            console.log('Usuario registrado:', response);
            this.mensajeVisible = true;
            setTimeout(() => {
              this.mensajeVisible = false;
              this.router.navigate(['/login']);
            }, 3000);
          } else {
            console.error('Error en el registro:', response.data);
            this.mensajeBaseDatos = true;
            setTimeout(() => {
              this.mensajeBaseDatos = false;
            }, 3000);
          }

        },
        error: (error) => {
          console.error('Error al registrar usuario:', error);
          this.mensajeError = true;
        }
      });
  }
}
