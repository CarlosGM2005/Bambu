import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioCorreosService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Método para enviar el correo de reserva
  enviarCorreoReserva(datos: {
    email: string;
    fecha: string;
    hora: string;
    cantPersonas: number;
    local: string;
    nombre: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/correoDeReserva`, datos);
  }

  // Método para enviar el correo con el resumen de compra
  enviarCorreoCompra(datos: {
    carrito: { productos: { nombre: string; cantidad: number }[]; importeTotal: number }[];
    local: string;
    email: string;
    nombre: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/correoCompra`, datos);
  }

}
