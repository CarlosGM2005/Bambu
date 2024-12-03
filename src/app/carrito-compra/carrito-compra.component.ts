import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent {
  listaProductos = [
    { nombre: 'SURTIDO Nº1', tipo: 'surtidos', precio: '18.50€', urlImg: 'assets/images/productos/SURTIDO1.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº2', tipo: 'surtidos', precio: '18.50€', urlImg: 'assets/images/productos/SURTIDO2.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº3', tipo: 'surtidos', precio: '18.50€', urlImg: 'assets/images/productos/SURTIDO3.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº4', tipo: 'surtidos', precio: '22.50€', urlImg: 'assets/images/productos/SURTIDO4.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº5', tipo: 'surtidos', precio: '16.90€', urlImg: 'assets/images/productos/SURTIDO5.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº6', tipo: 'surtidos', precio: '18.50€', urlImg: 'assets/images/productos/SURTIDO6.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'ARROZ CON SOJA', tipo: 'arrozNoodles', precio: '5.90€', urlImg: '', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'ARROZ VEGETAL', tipo: 'arrozNoodles', precio: '5.90€', urlImg: '', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'NOODLES VEGETAL', tipo: 'arrozNoodles', precio: '5.90€', urlImg: '', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'RAMEN CERDO', tipo: 'arrozNoodles', precio: '8.90€', urlImg: '', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'RAMEN YASAI VEGETAL', tipo: 'arrozNoodles', precio: '7.95€', urlImg: '', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
  ];

  productos: any[] = this.listaProductos.filter((producto) => producto.tipo === 'surtidos');



  productosFiltrados(categoria: string) {
    return this.listaProductos.filter((producto) => producto.tipo === categoria);
  }

  filtrarPorCategoria(event: Event, categoria: string) {
    event.preventDefault();
    this.productos = this.productosFiltrados(categoria);
  }

}
