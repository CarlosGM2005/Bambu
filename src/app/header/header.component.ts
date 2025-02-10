import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLoggedIn: boolean = true; // Simula que la sesión está iniciada
  showModal: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  logout() {
    this.isLoggedIn = false; // Simula el cierre de sesión
    this.showModal = false; // Oculta el modal
    // Aquí puedes agregar lógica para eliminar el token o redirigir al usuario
    console.log('Sesión cerrada');
  }
}
