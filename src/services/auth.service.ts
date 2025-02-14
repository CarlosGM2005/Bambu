import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConsumoApiService } from './consumo-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Creamos un BehaviorSubject para mantener el estado de la sesión (iniciado o no)
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private nombreUserSubject = new BehaviorSubject<string>("");

  constructor(private apiService: ConsumoApiService) {
    const nombreUsuario = sessionStorage.getItem('nombreUser');
    if (nombreUsuario) {
      this.isLoggedInSubject.next(true);  // Usuario logueado
      this.nombreUserSubject.next(nombreUsuario);  // Guardamos el nombre del usuario
    }
  }

  get isLoggedIn$() {
    return this.isLoggedInSubject.asObservable();
  }

  get nombreUser$() {
    return this.nombreUserSubject.asObservable();
  }

  // Iniciar sesión
  login(nombre: string) {
    sessionStorage.setItem('nombreUser', nombre);
    this.isLoggedInSubject.next(true);  
    this.nombreUserSubject.next(nombre);  
  }

  // Cerrar sesión
  logout() {
    sessionStorage.removeItem('nombreUser');
    this.isLoggedInSubject.next(false);  
    this.nombreUserSubject.next(""); 

    this.apiService.user = null;
    this.apiService.token = null;
  }
}
