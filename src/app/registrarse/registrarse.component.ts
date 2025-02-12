import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsumoApiService } from '../consumo-api.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {

  @ViewChild('formRegistro') formRegistro!: NgForm; // Obtiene la referencia al formulario

  mensajeVisible: boolean = false;
  mensajeError: boolean = false;

  constructor(private apiService: ConsumoApiService, private router: Router) { }

  registrarse() {
    if (!this.formRegistro.valid) {
      this.mensajeError = true;
    } else {

      /*
      this.apiService.registrarse().subscribe(
        response => {
          if (response.status === 'success') {
            this.mensajeVisible = true;

            setTimeout(() => {
              this.mensajeVisible = false;
              this.router.navigate(['/login']);
            }, 5000);
          } else {
            this.mensajeError = true;
          }
        },
        error => {
          console.error('Error en la solicitud:', error);
        }
      );
      */

    }
  }
}
