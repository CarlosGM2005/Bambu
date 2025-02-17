import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  // Importamos HttpClient y HttpHeaders
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiService {

  private apiUrl = 'http://localhost/apiBambu/api.php';
  public user: any = {};
  public token: any = "";

  constructor(private http: HttpClient) { }

  // Método para obtener productos por categoría
  obtenerProductosPorCategoria(categoria: string): Observable<any> {
    const params = { accion: 'obtenerTodosProductos', nombreCategoria: categoria };
    return this.http.get(this.apiUrl, { params });
  }

  // Método para obtener datos de un producto
  obtenerDatosProducto(nombreProducto: string): Observable<any> {
    const params = { accion: 'obtenerDatosProducto', nombreProducto: nombreProducto };
    return this.http.get(this.apiUrl, { params });
  }

  // Método para obtener todos los locales
  obtenerLocales(): Observable<any> {
    const params = { accion: 'obtenerDatosLocales' };
    return this.http.get(this.apiUrl, { params });
  }

  obtenerCategorias(): Observable<any> {
    const params = { accion: 'obtenerCategorias' };
    return this.http.get(this.apiUrl, { params });
  }
  // Método para iniciar sesión
  iniciarSesion(email: string, password: string): Observable<any> {
    const body = { accion: 'iniciarSesion', email, password };
    return this.http.post(this.apiUrl, body);
  }

  // Método para registrar un nuevo usuario
  registrarse(nombre: string, apellidos: string, dni: string, email: string, password: string, telefono: string): Observable<any> {
    const body = { accion: 'registrarse', nombre, apellidos, dni, email, password, telefono };
    return this.http.post(this.apiUrl, body);
  }

  // Método para hacer una reserva
  reservar(local: string, fecha: string, hora: string, cantPersonas: number, email: string, dni: string, token:string): Observable<any> {
    const body = { accion: 'reservar', local, fecha, hora, cantPersonas, email, dni, token};
    return this.http.post(this.apiUrl, body);
  }

  // Método para hacer un pedido
  pedir(local: string, carrito: any, dni: string, email:string ,token:string): Observable<any> {
    const body = { accion: 'pedir', local, carrito, dni , email ,token };
    return this.http.post(this.apiUrl, body);
  }

  // Método para actualizar la contraseña
  actualizarContra(email: string, password: string): Observable<any> {
    const body = { accion: 'actualizarContra', email, password };
    return this.http.put(this.apiUrl, body);
  }
}

