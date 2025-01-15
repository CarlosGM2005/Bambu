import { Component } from '@angular/core';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.scss']
})
export class ReservarComponent {
  
  mensajeVisible: boolean = false;

  finalizarReserva() {
    this.mensajeVisible = true;

    setTimeout(() => {
      this.mensajeVisible = false; // Oculta el mensaje después de 5 segundos
    }, 5000);
  }
  
}
