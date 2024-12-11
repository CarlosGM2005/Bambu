import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent {
  listaProductos = [
    { nombre: 'SURTIDO Nº1', tipo: 'SURTIDOS', precio: '18.50€', urlImg: 'assets/images/productos/surtidos/SURTIDO1.png', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº2', tipo: 'SURTIDOS', precio: '18.50€', urlImg: 'assets/images/productos/surtidos/SURTIDO2.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº3', tipo: 'SURTIDOS', precio: '18.50€', urlImg: 'assets/images/productos/surtidos/SURTIDO3.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº4', tipo: 'SURTIDOS', precio: '22.50€', urlImg: 'assets/images/productos/surtidos/SURTIDO4.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº5', tipo: 'SURTIDOS', precio: '16.90€', urlImg: 'assets/images/productos/surtidos/SURTIDO5.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'SURTIDO Nº6', tipo: 'SURTIDOS', precio: '18.50€', urlImg: 'assets/images/productos/surtidos/SURTIDO6.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'ARROZ CON SOJA', tipo: 'ARROZ Y NOODLES', precio: '5.90€', urlImg: 'assets/images/productos/arrozYNoodles/Arroz_con_Soja.png', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'ARROZ VEGETAL', tipo: 'ARROZ Y NOODLES', precio: '5.90€', urlImg: 'assets/images/productos/arrozYNoodles/Arroz_Vegetal.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'NOODLES VEGETAL', tipo: 'ARROZ Y NOODLES', precio: '5.90€', urlImg: 'assets/images/productos/arrozYNoodles/Noodles.jpg', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'RAMEN CERDO', tipo: 'ARROZ Y NOODLES', precio: '8.90€', urlImg: 'assets/images/productos/arrozYNoodles/Ramen_Cerdo.png', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
    { nombre: 'RAMEN YASAI VEGETAL', tipo: 'ARROZ Y NOODLES', precio: '7.95€', urlImg: 'assets/images/productos/arrozYNoodles/Ramen_Yasai.png', urlIcono: 'assets/images/iconos/carrito-aniadir.png' },
  ];

  productos: any[] = this.listaProductos.filter((producto) => producto.tipo === 'SURTIDOS');
  categoria: string = 'SURTIDOS';


  productosFiltrados(categoria: string) {
    return this.listaProductos.filter((producto) => producto.tipo === categoria);
  }

  filtrarPorCategoria(event: Event, categoria: string) {
    event.preventDefault();
    this.productos = this.productosFiltrados(categoria);
    this.categoria = categoria;
  }

}
