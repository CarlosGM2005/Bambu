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
      precio: '4.20€',
      urlImg: 'assets/images/productos/entrantes/Edamame.png',
      descripcion: '',
      alergenos: 'SOJA'
    },
    {
      nombre: 'Gyozas de pollo',
      tipo:'ENTRANTES',
      precio: '7.90€',
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA'
    },
    {
      nombre: 'Gyozas de cerdo',
      tipo:'ENTRANTES',
      precio: '7.90€',
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA'
    },
    {
      nombre: 'Gyozas de ternera',
      tipo:'ENTRANTES',
      precio: '7.90€',
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA'
    },
    {
      nombre: 'Rollitos mango langostinos',
      tipo:'ENTRANTES',
      precio: '7.90€',
      urlImg: 'assets/images/productos/entrantes/Rollitos_Mango_Langostinos.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA'
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
      precio: '4.90€ ',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Anguila.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, PESCADO, SÉSAMO, SOJA Y SULFITOS'
    },
    {
      nombre: 'Nigiri Atún Flambeado',
      tipo:'NIGIRIS',
      precio: '4.50€',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Atun_Flambeado.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS'
    },
    {
      nombre: 'Nigiri Atún',
      tipo:'NIGIRIS',
      precio: '4.50€',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Atun.png',
      descripcion: '',
      alergenos: 'CRUSTÁCEOS Y SULFITOS'
    },
    {
      nombre: 'Nigiri Ebi',
      tipo:'NIGIRIS',
      precio: '4.90€',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Ebi.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Nigiri Pez Mantequilla Flambeado',
      tipo:'NIGIRIS',
      precio: '4.50€',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Pez_Mantequilla_Flambeado.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS'
    },
    {
      nombre: 'Nigiri Pez Mantequilla',
      tipo:'NIGIRIS',
      precio: '4.50€',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Pez_Mantequilla.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS'
    },
    {
      nombre: 'Nigiri Salmón flambeado',
      tipo:'NIGIRIS',
      precio: '4.50€',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Salmon_Flambeado.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS'
    },
    {
      nombre: 'Nigiri Salmón',
      tipo:'NIGIRIS',
      precio: '4.50€',
      urlImg: 'assets/images/productos/nigiris/Nigiri_Salmon.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS'
    },

    //Rolls
    {
      nombre: 'Roll Almadraba',
      tipo:'ROLLS',
      precio: '10.50€',
      urlImg: 'assets/images/productos/rolls/Almadraba_Roll.png',
      descripcion: '',
      alergenos: 'LÁCTEOS, PESCADO, SOJA, GLUTEN, SÉSAMO'
    },
    {
      nombre: 'Roll Anguila',
      tipo:'ROLLS',
      precio: '9.50€',
      urlImg: 'assets/images/productos/rolls/Anguila_Roll.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, LÁCTEOS, PESCADO, SÉSAMO, SOJA Y SULFITOS'
    },
    {
      nombre: 'Roll Hawai',
      tipo:'ROLLS',
      precio: '8.90€',
      urlImg: 'assets/images/productos/rolls/Hawai_Roll.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, HUEVOS, MOSTAZA, PESCADO, SOJA Y SULFITOS'
    },
    {
      nombre: 'Roll Kazan',
      tipo:'ROLLS',
      precio: '9.20€',
      urlImg: 'assets/images/productos/rolls/Kazan_Roll.png',
      descripcion: '',
      alergenos: 'HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SÉSAMO Y SULFITO'
    },
    {
      nombre: 'Roll Pollo Crispy',
      tipo:'ROLLS',
      precio: '7.90€',
      urlImg: 'assets/images/productos/rolls/Pollo_Crispy_Roll.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, SÉSAMO, SOJA Y SULFITOS'
    },
    {
      nombre: 'Roll Street',
      tipo:'ROLLS',
      precio: '8.90€',
      urlImg: 'assets/images/productos/rolls/Street_Roll.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SOJA Y SULFITOS'
    },
    {
      nombre: 'Roll Tropical',
      tipo:'ROLLS',
      precio: '8.50€',
      urlImg: 'assets/images/productos/rolls/Tropical_Roll.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Roll Uramaki Atún',
      tipo:'ROLLS',
      precio: '8.95€',
      urlImg: 'assets/images/productos/rolls/Uramaki_Atun_Roll.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },

    //Makis
    {
      nombre: 'Maki Aguacate Mango',
      tipo:'MAKIS',
      precio: '4.50€',
      urlImg: 'assets/images/productos/maki/Maki_Aguacate_Mango.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Maki Aguacate',
      tipo:'MAKIS',
      precio: '5.90€',
      urlImg: 'assets/images/productos/maki/Maki_Aguacate.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Maki Anguila Aguacate',
      tipo:'MAKIS',
      precio: '4.90€',
      urlImg: 'assets/images/productos/maki/Maki_Anguila_Aguacate.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Maki Ebi Aguacate',
      tipo:'MAKIS',
      precio: '4.90€',
      urlImg: 'assets/images/productos/maki/Maki_Ebi_Aguacate.png',
      descripcion: '',
      alergenos: 'CRUSTÁCEOS Y SULFITOS'
    },
    {
      nombre: 'Maki Pez Mantequilla',
      tipo:'MAKIS',
      precio: '4.90€',
      urlImg: 'assets/images/productos/maki/Maki_Pez_Mantequilla.png',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Salmón Philadelphia',
      tipo:'MAKIS',
      precio: '5.60€',
      urlImg: 'assets/images/productos/maki/Maki_Salmon_Philadelphia.png',
      descripcion: '',
      alergenos: 'LÁCTEOS, PESCADO Y SULFITOS'
    },
    {
      nombre: 'Maki Salmón',
      tipo:'MAKIS',
      precio: '4.90€',
      urlImg: 'assets/images/productos/maki/Maki_Salmon.png',
      descripcion: '',
      alergenos: ''
    },
    {
      nombre: 'Maki Surimi',
      tipo:'MAKIS',
      precio: '7 €',
      urlImg: 'assets/images/productos/maki/Maki_Surimi.png',
      descripcion: '',
      alergenos: 'CRUSTÁCEOS, HUEVOS, MOLUSCOS, PESCADO Y SULFITOS'
    },
    {
      nombre: 'Maki Atún',
      tipo:'MAKIS',
      precio: '7 €',
      urlImg: 'assets/images/productos/maki/Maki_Atun.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS'
    },

    //Bebidas 
    {
      nombre: 'Agua con gas',
      tipo:'BEBIDAS',
      precio: '1.80€',
      urlImg: 'assets/images/productos/bebidas/Agua_Con_Gas.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Agua natural',
      tipo:'BEBIDAS',
      precio: '1.99€',
      urlImg: 'assets/images/productos/bebidas/Agua_Natural.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Cerveza estrella galicia',
      tipo:'BEBIDAS',
      precio: '1.80€',
      urlImg: 'assets/images/productos/bebidas/Cerveza_Estrella_Galicia_Quinto.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Cerveza kirin',
      tipo:'BEBIDAS',
      precio: '1.80€',
      urlImg: 'assets/images/productos/bebidas/Cerveza_Kirin.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },
    {
      nombre: 'Fanta White Peach',
      tipo:'BEBIDAS',
      precio: '2.20€',
      urlImg: 'assets/images/productos/bebidas/Fanta_White_Peach.png',
      descripcion: '',
      alergenos: 'NO TIENE'
    },

    //Postres
    {
      nombre: 'Mochi de cheesecake',
      tipo:'POSTRES',
      precio: '4.60€',
      urlImg: 'assets/images/productos/postres/Mochi_De_Cheesecake.png',
      descripcion: '',
      alergenos: 'LÁCTEOS'
    },
    {
      nombre: 'Mochi de mango',
      tipo:'POSTRES',
      precio: '4.60€',
      urlImg: 'assets/images/productos/postres/Mochi_De_Mango.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, FRUTOS SECOS, HUEVOS, LÁCTEOS Y SULFITOS'
    },
    {
      nombre: 'Mochi de té verde',
      tipo:'POSTRES',
      precio: '4.60€',
      urlImg: 'assets/images/productos/postres/Mochi_De_Té_Verde.png',
      descripcion: '',
      alergenos: 'CEREALES CON GLUTEN, FRUTOS SECOS, HUEVOS, LÁCTEOS Y SULFITOS'
    },
    {
      nombre: 'Tarta de queso y pistacho',
      tipo:'POSTRES',
      precio: '4.60€',
      urlImg: 'assets/images/productos/postres/Tarta_De_Queso_Y_Pistachos.png',
      descripcion: '',
      alergenos: 'GLUTEN, LACTOSA, FRUTOS SECOS, HUEVOS'
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
