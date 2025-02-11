import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../consumo-api.service'; 

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit{
  constructor(private apiService: ConsumoApiService) { }

  productosFiltrados: any[] = [];
  infoProducto: any = {};


  categoria: string = 'surtidos';

  ngOnInit(): void {
    this.apiService.obtenerProductosPorCategoria(this.categoria).subscribe(
      response => {
        if (response.status === 'success') {
          this.productosFiltrados = response.data; // Guardamos los productos recibidos
        } else {
          console.error('Error al obtener los productos:', response.data);
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
  
  obtenerInfoProducto(nombre: string){
    this.apiService.obtenerDatosProducto(nombre).subscribe(
      response => {
        if (response.status === 'success') {
          this.infoProducto = response.data;
        } else {
          console.error('Error al obtener los productos:', response.data);
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
  }


  filtrarPorCategoria(event: Event, categoria: string){
    event.preventDefault();
    this.categoria = categoria;
    this.apiService.obtenerProductosPorCategoria(categoria).subscribe(
      response => {
        if (response.status === 'success') {
          this.productosFiltrados = response.data;
        } else {
          console.error('Error al obtener los productos:', response.data);
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
  }
}
