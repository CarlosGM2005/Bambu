import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Importamos el servicio de autenticación

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false; // Estado de sesión
  showModal: boolean = false;  // Modal para confirmar cierre de sesión
  nombreUser: string = "";     // Nombre del usuario

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Nos suscribimos a los observables del servicio para obtener el estado de autenticación
    this.authService.isLoggedIn$.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.nombreUser$.subscribe(nombre => {
      this.nombreUser = nombre;
    });
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  logout() {
    this.authService.logout(); // Llamamos al método de logout del servicio
    this.showModal = false; // Cerramos el modal
  }
}
