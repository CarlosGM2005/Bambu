import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  listaProductos = [
    {
      nombre: 'SURTIDO Nº1',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/SURTIDO1.png',
      descripcion: '4 unid de Sésamo Roll Salmón , 4 Makis de Salmón, 2 Nigiris Salmón y 2 Nigiris de Atún.',
      alergenos: 'Crustáceos, Huevos, Moluscos, Pescado, Sésamo, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº2',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/SURTIDO2.jpg',
      descripcion: '4 unidades de Makis de salmón, 2 de Nigiris Pez mantequilla, 2 Nigiris atún y 2 Nigiris Salmón',
      alergenos: 'Pescado, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº3',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/SURTIDO3.jpg',
      descripcion: '4 unidades de Sésamo de Atún, 4 de Salmón Roll, 2 Nigiris de Salmón y 2 Nigiris Pez Mantequilla',
      alergenos: 'Pescado, Sésamo, Soja, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº4',
      tipo: 'SURTIDOS',
      precio: '22.50€',
      urlImg: 'assets/images/productos/SURTIDO4.jpg',
      descripcion: '4 unidades de Salmón Roll, 4 de Maki de Atún y 3 de Sashimi de Salmón',
      alergenos: 'Pescado, Soja, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº5',
      tipo: 'SURTIDOS',
      precio: '16.90€',
      urlImg: 'assets/images/productos/SURTIDO5.jpg',
      descripcion: '4 unidades de Ebi Roll, 4 de Sésamo Salmón, 2 Nigiris Salmón y 2 Nigiris Gambas',
      alergenos: 'Cereales con gluten, Crustáceos, Huevos, Moluscos, Mostaza, Pescado, Soja, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº6',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/SURTIDO6.jpg',
      descripcion: '4 unidades de Surimi Roll, 4 de Maki Salmón y 4 Maki atún',
      alergenos: 'Crustáceos, Huevos, Moluscos, Pescado, Sulfitos',
    },
    {
      nombre: 'ARROZ CON SOJA',
      tipo: 'ARROZ Y NOODLES',
      precio: '5.90€',
      urlImg: 'assets/images/productos/Arroz_con_Soja.png',
      descripcion: 'Arroz salteado con huevo, maíz, zanahoria, salsa soja.',
      alergenos: 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja',
    },
    {
      nombre: 'ARROZ VEGETAL',
      tipo: 'ARROZ Y NOODLES',
      precio: '5.90€',
      urlImg: 'assets/images/productos/ARROZ_VEGETAL.jpg',
      descripcion: 'Arroz salteado con huevo, maíz, zanahoria y salsa Wok.',
      alergenos: 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja',
    },
    {
      nombre: 'NOODLES VEGETAL',
      tipo: 'ARROZ Y NOODLES',
      precio: '5.90€',
      urlImg: 'assets/images/productos/NOODLES.jpg',
      descripcion: 'Tallarines indonesios salteados con verduras, huevo y salsa Yakisoba.',
      alergenos: 'Cereales con gluten, Huevos, Soja, Sulfitos',
    },
    {
      nombre: 'RAMEN CERDO',
      tipo: 'ARROZ Y NOODLES',
      precio: '8.90€',
      urlImg: 'assets/images/productos/Ramen_Cerdo.png',
      descripcion: 'Sopa japonesa de fideos de trigo con base de miso, cebollino, huevo, naruto, cerdo cocido y alga nori.',
      alergenos: 'Cacahuetes, Huevos, Pescado, Sésamo, Soja',
    },
    {
      nombre: 'RAMEN YASAI VEGETAL',
      tipo: 'ARROZ Y NOODLES',
      precio: '7.95€',
      urlImg: 'assets/images/productos/Ramen_Yasai.png',
      descripcion: 'Sopa japonesa de fideos de trigo, con base de miso, salsa curry, bambú, setas y alga nori.',
      alergenos: 'Apio, Cereales con gluten, Huevos, Lácteos, Mostaza, Pescado, Soja',
    },
  ];

  productos: any[] = this.listaProductos.filter((producto) => producto.tipo === 'SURTIDOS');
  categoria: string = 'SURTIDOS';

  // Inicializar la variable productoFiltrado
  productoFiltrado: any = [];

  productosFiltrados(categoria: string) {
    return this.listaProductos.filter((producto) => producto.tipo === categoria);
  }

  filtrarPorCategoria(event: Event, categoria: string) {
    event.preventDefault();
    this.productos = this.productosFiltrados(categoria);
    this.categoria = categoria;
  }
}
