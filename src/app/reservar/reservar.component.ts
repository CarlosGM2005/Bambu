import { Component } from '@angular/core';
import { ConsumoApiService } from '../../services/consumo-api.service';
import { EnvioCorreosService } from '../../services/envio-correos.service';

declare var bootstrap: any;

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent{

  constructor(private apiService: ConsumoApiService, private envioCorreosService: EnvioCorreosService) { }
  
  mensajeVisible: boolean = false;
  mensajeError: boolean = false;
  mensajeInicioSesion: boolean = false;

  reserva = {
    local: '',
    fecha: '',
    comensales: 0,
    hora: ''
  };

  validarReserva() {
    if (this.apiService.user && this.apiService.user.email){
      if (this.reserva.local && this.reserva.fecha && this.reserva.comensales && this.reserva.hora) {      
        this.mensajeError = false; 
        const modal = new bootstrap.Modal(document.getElementById('exampleModal')!);
        modal.show(); 
      } else {
        this.mensajeError = true;
        setTimeout(() => {
          this.mensajeError = false;
        }, 3000);
      }
    } else {
      this.mensajeInicioSesion = true;
      setTimeout(() => {
        this.mensajeInicioSesion = false;
      }, 3000);
    }
  }

  finalizarReserva() {
    this.apiService.reservar(this.reserva.local, this.reserva.fecha, this.reserva.hora, this.reserva.comensales, 
      this.apiService.user.email, this.apiService.user.dni, this.apiService.token).subscribe(
      response => {
        if (response.status === 'success') {
          //Enviar el correo con nodemail response.data.email y responde.data.nombre
          const reservaDatos = {
            email: this.apiService.user.email,
            fecha: this.reserva.fecha,
            hora: this.reserva.hora,
            cantPersonas: this.reserva.comensales,
            local: this.reserva.local,
            nombre: this.apiService.user.nombre
          };
          this.envioCorreosService.enviarCorreoReserva(reservaDatos).subscribe(
            respuesta => {
              console.log('Correo enviado', respuesta);
            },
            error => {
              console.error('Error enviando el correo:', error);
            }
          );
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );

    this.mensajeVisible = true;
    

    setTimeout(() => {
      this.mensajeVisible = false; // Oculta el mensaje después de 5 segundos
    }, 5000);
  }


}
