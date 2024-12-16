import { Component } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  listaProductos = [
    //Surtidos
    {
      nombre: 'SURTIDO Nº1',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/surtidos/SURTIDO1.png',
      descripcion: '4 unid de Sésamo Roll Salmón , 4 Makis de Salmón, 2 Nigiris Salmón y 2 Nigiris de Atún.',
      alergenos: 'Crustáceos, Huevos, Moluscos, Pescado, Sésamo, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº2',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/surtidos/SURTIDO2.jpg',
      descripcion: '4 unidades de Makis de salmón, 2 de Nigiris Pez mantequilla, 2 Nigiris atún y 2 Nigiris Salmón',
      alergenos: 'Pescado, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº3',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/surtidos/SURTIDO3.jpg',
      descripcion: '4 unidades de Sésamo de Atún, 4 de Salmón Roll, 2 Nigiris de Salmón y 2 Nigiris Pez Mantequilla',
      alergenos: 'Pescado, Sésamo, Soja, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº4',
      tipo: 'SURTIDOS',
      precio: '22.50€',
      urlImg: 'assets/images/productos/surtidos/SURTIDO4.jpg',
      descripcion: '4 unidades de Salmón Roll, 4 de Maki de Atún y 3 de Sashimi de Salmón',
      alergenos: 'Pescado, Soja, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº5',
      tipo: 'SURTIDOS',
      precio: '16.90€',
      urlImg: 'assets/images/productos/surtidos/SURTIDO5.jpg',
      descripcion: '4 unidades de Ebi Roll, 4 de Sésamo Salmón, 2 Nigiris Salmón y 2 Nigiris Gambas',
      alergenos: 'Cereales con gluten, Crustáceos, Huevos, Moluscos, Mostaza, Pescado, Soja, Sulfitos',
    },
    {
      nombre: 'SURTIDO Nº6',
      tipo: 'SURTIDOS',
      precio: '18.50€',
      urlImg: 'assets/images/productos/surtidos/SURTIDO6.jpg',
      descripcion: '4 unidades de Surimi Roll, 4 de Maki Salmón y 4 Maki atún',
      alergenos: 'Crustáceos, Huevos, Moluscos, Pescado, Sulfitos',
    },

    //Entrantes
    {
      nombre: 'Edamame',
      tipo:'ENTRANTES',
      precio: '',
      urlImg: 'assets/images/productos/entrantes/Edamame.png',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Gyozas de pollo',
      tipo:'ENTRANTES',
      precio: '',
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Gyozas de cerdo',
      tipo:'ENTRANTES',
      precio: '',
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Gyozas de ternera',
      tipo:'ENTRANTES',
      precio: '',
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Rollitos mango langostinos',
      tipo:'ENTRANTES',
      precio: '',
      urlImg: 'assets/images/productos/entrantes/Rollitos_Mango_Langostinos.png',
      descripcion: '',
      alergenos: ''
    },
  
    //Arroz y noodles
    {
      nombre: 'ARROZ CON SOJA',
      tipo: 'ARROZ Y NOODLES',
      precio: '5.90€',
      urlImg: 'assets/images/productos/arrozYNoodles/Arroz_con_Soja.png',
      descripcion: 'Arroz salteado con huevo, maíz, zanahoria, salsa soja.',
      alergenos: 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja',
    },
    {
      nombre: 'ARROZ VEGETAL',
      tipo: 'ARROZ Y NOODLES',
      precio: '5.90€',
      urlImg: 'assets/images/productos/arrozYNoodles/Arroz_Vegetal.png',
      descripcion: 'Arroz salteado con huevo, maíz, zanahoria y salsa Wok.',
      alergenos: 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja',
    },
    {
      nombre: 'NOODLES VEGETAL',
      tipo: 'ARROZ Y NOODLES',
      precio: '5.90€',
      urlImg: 'assets/images/productos/arrozYNoodles/Noodles.png',
      descripcion: 'Tallarines indonesios salteados con verduras, huevo y salsa Yakisoba.',
      alergenos: 'Cereales con gluten, Huevos, Soja, Sulfitos',
    },
    {
      nombre: 'RAMEN CERDO',
      tipo: 'ARROZ Y NOODLES',
      precio: '8.90€',
      urlImg: 'assets/images/productos/arrozYNoodles/Ramen_Cerdo.png',
      descripcion: 'Sopa japonesa de fideos de trigo con base de miso, cebollino, huevo, naruto, cerdo cocido y alga nori.',
      alergenos: 'Cacahuetes, Huevos, Pescado, Sésamo, Soja',
    },
    {
      nombre: 'RAMEN YASAI VEGETAL',
      tipo: 'ARROZ Y NOODLES',
      precio: '7.95€',
      urlImg: 'assets/images/productos/arrozYNoodles/Ramen_Yasai.png',
      descripcion: 'Sopa japonesa de fideos de trigo, con base de miso, salsa curry, bambú, setas y alga nori.',
      alergenos: 'Apio, Cereales con gluten, Huevos, Lácteos, Mostaza, Pescado, Soja',
    },

    //Nigiris
    {
      nombre: 'Nigiri Anguila',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Nigiri Atún Flambeado',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Nigiri Atún',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Nigiri Ebi',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Nigiri Pez Mantequilla Flambeado',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Nigiri Pez Mantequilla',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Nigiri Salmón flambeado',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Nigiri Salmón',
      tipo:'NIGIRIS',
      precio: '',
      urlImg: 'assets/images/productos/nigiris/',
      descripcion: '',
      alergenos: ''
    },

    //Rolls
    {
      nombre: 'Roll Almadraba',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Roll Anguila',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Roll Hawai',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Roll Kazan',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Roll Pollo Crispy',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Roll Street',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Roll Tropical',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Roll Uramaki Atún',
      tipo:'ROLLS',
      precio: '',
      urlImg: 'assets/images/productos/rolls/',
      descripcion: '',
      alergenos: ''
    },

    //Makis
    {
      nombre: 'Maki Aguacate Mango',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Aguacate',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Anguila Aguacate',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Ebi Aguacate',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Pez Mantequilla',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Salmón Philadephia',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Salmón',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Surimi',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Atún',
      tipo:'MAKIS',
      precio: '',
      urlImg: 'assets/images/productos/maki/',
      descripcion: '',
      alergenos: ''
    },

    //Bebidas
    {
      nombre: 'Agua con gas',
      tipo:'BEBIDAS',
      precio: '',
      urlImg: 'assets/images/productos/bebidas/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Agua natural',
      tipo:'BEBIDAS',
      precio: '',
      urlImg: 'assets/images/productos/bebidas/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Cerveza estrella galicia',
      tipo:'BEBIDAS',
      precio: '',
      urlImg: 'assets/images/productos/bebidas/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Cerveza kirin',
      tipo:'BEBIDAS',
      precio: '',
      urlImg: 'assets/images/productos/bebidas/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Fanta White Peach',
      tipo:'BEBIDAS',
      precio: '',
      urlImg: 'assets/images/productos/bebidas/',
      descripcion: '',
      alergenos: ''
    },

    //Postres
    {
      nombre: 'Mochi de fresa',
      tipo:'POSTRES',
      precio: '',
      urlImg: 'assets/images/productos/postres/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Mochi de mango',
      tipo:'POSTRES',
      precio: '',
      urlImg: 'assets/images/productos/postres/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Mochi de cheesecake',
      tipo:'POSTRES',
      precio: '',
      urlImg: 'assets/images/productos/postres/',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Tarta de queso y pistacho',
      tipo:'POSTRES',
      precio: '',
      urlImg: 'assets/images/productos/postres/',
      descripcion: '',
      alergenos: ''
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
