import { Component } from '@angular/core';
import { ConsumoApiService } from '../../services/consumo-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public apiService: ConsumoApiService) { }

  mensajeError: boolean = false;
  $email: string = '';
  $password: string = '';

  iniciarSesion() {
 
    this.apiService.iniciarSesion(this.$email, this.$password).subscribe(
      response => {
        if (response.status === 'success') {
          this.apiService.user = response.data;
        } else {
          this.mensajeError = true;
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
