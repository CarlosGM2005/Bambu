import { Component } from '@angular/core';
import { ConsumoApiService } from '../consumo-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private apiService: ConsumoApiService) { }

  $email: string = '';
  $password: string = '';

  iniciarSesion() {
 
    this.apiService.iniciarSesion(this.$email, this.$password).subscribe(
      response => {
        if (response.status === 'success') {
        
        } else {

          console.error('Error en el login:', response);
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
