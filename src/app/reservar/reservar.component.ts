import { Component } from '@angular/core';
import { ConsumoApiService } from '../consumo-api.service'; 
declare var bootstrap: any;

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent{

  constructor(private apiService: ConsumoApiService) { }
  
  mensajeVisible: boolean = false;
  mensajeError: boolean = false;

  reserva = {
    local: '',
    fecha: '',
    comensales: 0,
    hora: ''
  };

  validarReserva() {
    if (this.reserva.local && this.reserva.fecha && this.reserva.comensales && this.reserva.hora) {
      this.mensajeError = false; 
      const modal = new bootstrap.Modal(document.getElementById('exampleModal')!);
      modal.show(); 
    } else {
      this.mensajeError = true;
    }
  }

  finalizarReserva() {
    this.apiService.reservar(this.reserva.local, this.reserva.fecha, this.reserva.hora, this.reserva.comensales).subscribe(
      response => {
        if (response.status === 'success') {
          //Enviar el correo con nodemail response.data.email y responde.data.nombre
          
        } else {
          console.error('Error al obtener los productos:', response.data);
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
