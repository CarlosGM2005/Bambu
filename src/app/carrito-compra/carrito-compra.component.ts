import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent {
  listaProductos = [
    //Surtidos
    {
      nombre: "Surtido Nº1",
      tipo: "SURTIDOS",
      precio: 18.50,
      urlImg: "assets/images/productos/surtidos/SURTIDO1.png",
      descripcion: "4 unid de Sésamo Roll Salmón , 4 Makis de Salmón, 2 Nigiris Salmón y 2 Nigiris de Atún.",
      alergenos: "Crustáceos, Huevos, Moluscos, Pescado, Sésamo, Sulfitos",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Referencia: Sushi Panda"
    },
    {
      nombre: "Surtido Nº2",
      tipo: "SURTIDOS",
      precio: 18.50,
      urlImg: "assets/images/productos/surtidos/SURTIDO2.png",
      descripcion: "4 unidades de Makis de salmón, 2 de Nigiris Pez mantequilla, 2 Nigiris atún y 2 Nigiris Salmón",
      alergenos: "Pescado, Sulfitos",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Referencia: Sushi Panda"
    },
    {
      nombre: "Surtido Nº3",
      tipo: "SURTIDOS",
      precio: 18.50,
      urlImg: "assets/images/productos/surtidos/SURTIDO3.png",
      descripcion: "4 unidades de Sésamo de Atún, 4 de Salmón Roll, 2 Nigiris de Salmón y 2 Nigiris Pez Mantequilla",
      alergenos: "Pescado, Sésamo, Soja, Sulfitos",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Referencia: Sushi Panda"
    },
    {
      nombre: "Surtido Nº4",
      tipo: "SURTIDOS",
      precio: 22.50,
      urlImg: "assets/images/productos/surtidos/SURTIDO4.png",
      descripcion: "4 unidades de Salmón Roll, 4 de Maki de Atún y 3 de Sashimi de Salmón",
      alergenos: "Pescado, Soja, Sulfitos",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Referencia: Sushi Panda"
    },
    {
      nombre: "Surtido Nº5",
      tipo: "SURTIDOS",
      precio: 16.90,
      urlImg: "assets/images/productos/surtidos/SURTIDO5.png",
      descripcion: "4 unidades de Ebi Roll, 4 de Sésamo Salmón, 2 Nigiris Salmón y 2 Nigiris Gambas",
      alergenos: "Cereales con gluten, Crustáceos, Huevos, Moluscos, Mostaza, Pescado, Soja, Sulfitos",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Referencia: Sushi Panda"
    },
    {
      nombre: "Surtido Nº6",
      tipo: "SURTIDOS",
      precio: 18.50,
      urlImg: "assets/images/productos/surtidos/SURTIDO6.png",
      descripcion: "4 unidades de Surimi Roll, 4 de Maki Salmón y 4 Maki atún",
      alergenos: "Crustáceos, Huevos, Moluscos, Pescado, Sulfitos",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Referencia: Sushi Panda"
    },

    //Entrantes

    {
      nombre: 'Edamame',
      tipo: 'ENTRANTES',
      precio: 4.20,
      urlImg: 'assets/images/productos/entrantes/Edamame.png',
      descripcion: 'Habas de soja verde cocidas.',
      alergenos: 'SOJA',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Edamame'
    },
    {
      nombre: 'Gyozas de Pollo',
      tipo: 'ENTRANTES',
      precio: 7.90,
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: 'Empanadillas rellenas de pollo y verduras.',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Gyozas de Pollo'
    },
    {
      nombre: 'Gyozas de Cerdo',
      tipo: 'ENTRANTES',
      precio: 7.90,
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: 'Empanadillas rellenas de carne de cerdo y verduras.',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Gyozas de Cerdo'
    },
    {
      nombre: 'Gyozas de Ternera',
      tipo: 'ENTRANTES',
      precio: 7.90,
      urlImg: 'assets/images/productos/entrantes/Gyozas.png',
      descripcion: 'Empanadillas rellenas de carne de ternera y verduras.',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Gyozas de Ternera'
    },
    {
      nombre: 'Rollitos Mango Langostinos',
      tipo: 'ENTRANTES',
      precio: 7.90,
      urlImg: 'assets/images/productos/entrantes/Rollitos_Mango_Langostinos.png',
      descripcion: 'Rollito relleno de langostino y mango.',
      alergenos: 'CEREALES CON GLUTEN, SÉSAMO Y SOJA',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Rollitos Mango Langostinos'
    },



    //Arroz y noodles
    {
      nombre: 'Arroz con Soja',
      tipo: 'ARROZ Y NOODLES',
      precio: 5.90,
      urlImg: 'assets/images/productos/arrozYNoodles/Arroz_con_Soja.png',
      descripcion: 'Arroz salteado con huevo, maíz, zanahoria, salsa soja.',
      alergenos: 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Arroz con Soja'
    },
    {
      nombre: 'Arroz Vegetal',
      tipo: 'ARROZ Y NOODLES',
      precio: 5.90,
      urlImg: 'assets/images/productos/arrozYNoodles/Arroz_Vegetal.png',
      descripcion: 'Arroz salteado con huevo, maíz, zanahoria y salsa Wok.',
      alergenos: 'Apio, Cereales con gluten, Crustáceos, Huevos, Lácteos, Moluscos, Pescado, Soja',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Arroz Vegetal'
    },
    {
      nombre: 'Noodles Vegetales',
      tipo: 'ARROZ Y NOODLES',
      precio: 5.90,
      urlImg: 'assets/images/productos/arrozYNoodles/Noodles.png',
      descripcion: 'Tallarines indonesios salteados con verduras, huevo y salsa Yakisoba.',
      alergenos: 'Cereales con gluten, Huevos, Soja, Sulfitos',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Noodles Vegetales'
    },
    {
      nombre: 'Ramen Cerdo',
      tipo: 'ARROZ Y NOODLES',
      precio: 8.90,
      urlImg: 'assets/images/productos/arrozYNoodles/Ramen_Cerdo.png',
      descripcion: 'Sopa japonesa de fideos de trigo con base de miso, cebollino, huevo, naruto, cerdo cocido y alga nori.',
      alergenos: 'Cacahuetes, Huevos, Pescado, Sésamo, Soja',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Ramen Cerdo'
    },
    {
      nombre: 'Ramen Yasai Vegetal',
      tipo: 'ARROZ Y NOODLES',
      precio: 7.95,
      urlImg: 'assets/images/productos/arrozYNoodles/Ramen_Yasai.png',
      descripcion: 'Sopa japonesa de fideos de trigo, con base de miso, salsa curry, bambú, setas y alga nori.',
      alergenos: 'Apio, Cereales con gluten, Huevos, Lácteos, Mostaza, Pescado, Soja',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Ramen Yasai Vegetal'
    },



    //Nigiris

    {
      nombre: 'Nigiri Anguila',
      tipo: 'NIGIRIS',
      precio: 4.90,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Anguila.png',
      descripcion: 'Dos piezas de arroz de sushi cubiertos de filetes de anguila.',
      alergenos: 'CEREALES CON GLUTEN, PESCADO, SÉSAMO, SOJA Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Nigiri Atún Flambeado',
      tipo: 'NIGIRIS',
      precio: 4.50,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Atun_Flambeado.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Nigiri Atún',
      tipo: 'NIGIRIS',
      precio: 4.50,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Atun.png',
      descripcion: 'Dos piezas de arroz de sushi cubiertos de filetes de atún rojo de almadraba.',
      alergenos: 'CRUSTÁCEOS Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Nigiri Ebi',
      tipo: 'NIGIRIS',
      precio: 4.20,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Ebi.png',
      descripcion: 'Dos piezas de arroz de sushi cubiertos de dos piezas de gambas.',
      alergenos: 'CRUSTÁCEOS, SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Nigiri Pez Mantequilla Flambeado',
      tipo: 'NIGIRIS',
      precio: 4.90,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Pez_Mantequilla_Flambeado.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Nigiri Pez Mantequilla',
      tipo: 'NIGIRIS',
      precio: 3.90,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Pez_Mantequilla.png',
      descripcion: 'Dos piezas de arroz de sushi cubiertos de filetes de pez mantequilla.',
      alergenos: 'PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Nigiri Salmón flambeado',
      tipo: 'NIGIRIS',
      precio: 4.50,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Salmon_Flambeado.png',
      descripcion: '',
      alergenos: 'PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Nigiri Salmón',
      tipo: 'NIGIRIS',
      precio: 4.50,
      urlImg: 'assets/images/productos/nigiris/Nigiri_Salmon.png',
      descripcion: 'Dos piezas de arroz de sushi cubiertos de filetes de salmón',
      alergenos: 'PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },



    //Rolls
    {
      nombre: 'Roll Almadraba',
      tipo: 'ROLLS',
      precio: 10.50,
      urlImg: 'assets/images/productos/rolls/Almadraba_Roll.png',
      descripcion: 'Atún en tempura con queso crema, envuelto en arroz de sushi cubierto de atún flambeado, salsa kazan y salsa teriyaki.',
      alergenos: 'LÁCTEOS, PESCADO, SOJA, GLUTEN, SÉSAMO',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Roll Anguila',
      tipo: 'ROLLS',
      precio: 9.50,
      urlImg: 'assets/images/productos/rolls/Anguila_Roll.png',
      descripcion: 'Anguila, aguacate y philadelphia enrollado con arroz de sushi y cubierto de cebolla frita y salsa anguila.',
      alergenos: 'CEREALES CON GLUTEN, LÁCTEOS, PESCADO, SÉSAMO, SOJA Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Roll Hawai',
      tipo: 'ROLLS',
      precio: 8.90,
      urlImg: 'assets/images/productos/rolls/Hawai_Roll.png',
      descripcion: 'Pez mantequilla rebozado, enrollado en arroz de sushi y cubierto de salsa Japonesa, sriracha y azúcar moreno flameada.',
      alergenos: 'CEREALES CON GLUTEN, HUEVOS, MOSTAZA, PESCADO, SOJA Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Roll Kazan',
      tipo: 'ROLLS',
      precio: 9.20,
      urlImg: 'assets/images/productos/rolls/Kazan_Roll.png',
      descripcion: 'Aguacate y salmón enrollado en arroz de sushi y cubierto de salmón flameado y salsa picante de miel y mostaza.',
      alergenos: 'HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SÉSAMO Y SULFITO',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Roll Pollo Crispy',
      tipo: 'ROLLS',
      precio: 7.90,
      urlImg: 'assets/images/productos/rolls/Pollo_Crispy_Roll.png',
      descripcion: 'Pollo crujiente y philadelphia enrollado de arroz de sushi y cubierto de salsa teriyaki.',
      alergenos: 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, SÉSAMO, SOJA Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Roll Street',
      tipo: 'ROLLS',
      precio: 8.95,
      urlImg: 'assets/images/productos/rolls/Street_Roll.png',
      descripcion: 'Roll de pato en tempura y queso Philadelphia cubierto de cebolla en tempura y salsa street',
      alergenos: 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SOJA Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Roll Tropical',
      tipo: 'ROLLS',
      precio: 8.50,
      urlImg: 'assets/images/productos/rolls/Tropical_Roll.png',
      descripcion: 'Salmón, aguacate envuelto en arroz de sushi, cubierto de mango, cacahuete y fideo kadafi crujiente.',
      alergenos: 'NO TIENE',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Roll Uramaki Atún',
      tipo: 'ROLLS',
      precio: 8.95,
      urlImg: 'assets/images/productos/rolls/Uramaki_Atun_Roll.png',
      descripcion: 'Atún cocido y philadelphia enrollado en arroz de sushi y rebozado, cubierto de cebolla crujiente y salsa Kimchi',
      alergenos: 'CEREALES CON GLUTEN, HUEVOS, LÁCTEOS, MOSTAZA, PESCADO, SOJA, SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },

    //Makis
    {
      nombre: 'Maki Aguacate y Mango',
      tipo: 'MAKIS',
      precio: 4.50,
      urlImg: 'assets/images/productos/maki/Maki_Aguacate_Mango.png',
      descripcion: '',
      alergenos: 'SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Aguacate',
      tipo: 'MAKIS',
      precio: 5.90,
      urlImg: 'assets/images/productos/maki/Maki_Aguacate.png',
      descripcion: 'Arroz de sushi con aguacate envuelto en alga nori.',
      alergenos: 'SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Anguila Aguacate',
      tipo: 'MAKIS',
      precio: 4.90,
      urlImg: 'assets/images/productos/maki/Maki_Anguila_Aguacate.png',
      descripcion: '',
      alergenos: 'NO TIENE',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Ebi Aguacate',
      tipo: 'MAKIS',
      precio: 4.90,
      urlImg: 'assets/images/productos/maki/Maki_Ebi_Aguacate.png',
      descripcion: 'Arroz de sushi con gambas y aguacate envuelto en alga nori.',
      alergenos: 'CRUSTÁCEOS Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Pez Mantequilla Trufa',
      tipo: 'MAKIS',
      precio: 4.90,
      urlImg: 'assets/images/productos/maki/Maki_Pez_Mantequilla_Trufa.png',
      descripcion: 'Arroz de sushi con pez mantequilla y trufa envuelto en alga nori.',
      alergenos: 'PESCADO, SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Salmón Philadelphia',
      tipo: 'MAKIS',
      precio: 5.60,
      urlImg: 'assets/images/productos/maki/Maki_Salmon_Philadelphia.png',
      descripcion: 'Arroz de sushi con salmón y philadelphia envuelto en alga nori.',
      alergenos: 'LÁCTEOS, PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Salmón',
      tipo: 'MAKIS',
      precio: 4.90,
      urlImg: 'assets/images/productos/maki/Maki_Salmon.png',
      descripcion: 'Arroz de sushi con salmón envuelto en alga nori.',
      alergenos: 'PESCADO, SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Surimi',
      tipo: 'MAKIS',
      precio: 4.90,
      urlImg: 'assets/images/productos/maki/Maki_Surimi.png',
      descripcion: 'Arroz de sushi con surimi envuelto en alga nori.',
      alergenos: 'CRUSTÁCEOS, HUEVOS, MOLUSCOS, PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },
    {
      nombre: 'Maki Atún',
      tipo: 'MAKIS',
      precio: 5.90,
      urlImg: 'assets/images/productos/maki/Maki_Atun.png',
      descripcion: 'Arroz de sushi con atún rojo de almadraba envuelto en alga nori.',
      alergenos: 'PESCADO Y SULFITOS',
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: 'Referencia: Sushi Panda'
    },

    //Bebidas 
    {
      nombre: "Sake Tanrei",
      tipo: "BEBIDAS",
      precio: 4.99,
      urlImg: "assets/images/productos/bebidas/Sake_Tanrei.png",
      descripcion: "",
      alergenos: "NO TIENE",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Sake Tanrei",
    },
    {
      nombre: "Sake Kakumasume",
      tipo: "BEBIDAS",
      precio: 1.90,
      urlImg: "assets/images/productos/bebidas/Sake_Kakumasume.png",
      descripcion: "",
      alergenos: "NO TIENE",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Sake Kakumasume",
    },
    {
      nombre: "Cerveza Estrella Galicia",
      tipo: "BEBIDAS",
      precio: 2.00,
      urlImg: "assets/images/productos/bebidas/Cerveza_Estrella_Galicia_Quinto.png",
      descripcion: "",
      alergenos: "NO TIENE",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Cerveza Estrella Galicia",
    },
    {
      nombre: "Cerveza Kirin Ichiban",
      tipo: "BEBIDAS",
      precio: 3.90,
      urlImg: "assets/images/productos/bebidas/Cerveza_Kirin.png",
      descripcion: "",
      alergenos: "NO TIENE",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Cerveza Kirin Ichiban",
    },
    {
      nombre: "Fanta White Peach",
      tipo: 2.00,
      precio: "Fanta White Peach",
      urlImg: "assets/images/productos/bebidas/Fanta_White_Peach.png",
      descripcion: "",
      alergenos: "NO TIENE",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Fanta White Peach",
    },

    //Postres
    {
      nombre: "Mochi de Cheesecake",
      tipo: "POSTRES",
      precio: 4.60,
      urlImg: "assets/images/productos/postres/Mochi_De_Cheesecake.png",
      descripcion: "Pastel japonés hecho de mochigome, con sabor a tarta de queso y frutos rojos.",
      alergenos: "FRUTOS SECOS, LÁCTEOS, SOJA, SULFITOS",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Mochi de Cheesecake"
    },
    {
      nombre: "Mochi de Mango",
      tipo: "POSTRES",
      precio: 4.60,
      urlImg: "assets/images/productos/postres/Mochi_De_Mango.png",
      descripcion: "Pastel japonés hecho de mochigome, con sabor a mango",
      alergenos: "CEREALES CON GLUTEN, FRUTOS SECOS, HUEVOS, SULFITOS",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Mochi de Mango"
    },
    {
      nombre: "Mochi de Té Matcha",
      tipo: "POSTRES",
      precio: 4.60,
      urlImg: "assets/images/productos/postres/Mochi_De_Té_Verde.png",
      descripcion: "",
      alergenos: "FRUTOS SECOS, LÁCTEOS, SOJA, SULFITOS",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Mochi de Té Matcha",
    },
    {
      nombre: "Tarta de Queso y Pistacho",
      tipo: "POSTRES",
      precio: 4.50,
      urlImg: "assets/images/productos/postres/Tarta_De_Queso_Y_Pistachos.png",
      descripcion: "",
      alergenos: "CEREALES CON GLUTEN, FRUTOS SECOS, HUEVOS, LÁCTEOS, PESCADO, SOJA, SULFITOS",
      urlIcono: "assets/images/iconos/carrito-aniadir.png",
      title: "Tarta de Queso y Pistacho",
    }



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

  
  contenedor: any[] = [];

  // Método para añadir un producto al contenedor
  onAddProduct(producto: any) {
    const index = this.contenedor.findIndex(item => item.nombre === producto.nombre);
    producto.precio = parseFloat(producto.precio.toFixed(2));
    if (index > -1) {
      // Si ya existe el producto, aumentamos la cantidad
      this.contenedor[index].cantidad++;
      this.contenedor[index].total = parseFloat((this.contenedor[index].cantidad * producto.precio).toFixed(2)); // Redondeo
    } else {
      // Si no existe, lo añadimos
      this.contenedor.push({
        ...producto,
        cantidad: 1, // Inicia con una cantidad de 1
        total: parseFloat(producto.precio.toFixed(2)), // Redondeo
        urlImgMenos: "../../assets/images/iconos/signo-menos.png",
        urlImgMas: "../../assets/images/iconos/signo más.png"
      });
    }
  }

  // Método para incrementar la cantidad de un producto
  incrementarCantidad(item: any) {
    item.cantidad++;
    item.total = parseFloat((item.cantidad * item.precio).toFixed(2)); // Redondeo
  }

  // Método para reducir la cantidad de un producto
  reducirCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
      item.total = parseFloat((item.cantidad * item.precio).toFixed(2)); // Redondeo
    } else {
      // Si la cantidad llega a 0, lo eliminamos del contenedor
      this.contenedor = this.contenedor.filter(producto => producto !== item);
    }
  }

  calcularSubtotal(): number {
    // Redondeamos el subtotal final
    return parseFloat(this.contenedor.reduce((sum, item) => sum + item.total, 0).toFixed(2));
  }

  calcularTotal(): number {
    // Puedes agregar impuestos u otras reglas de negocio aquí si es necesario.
    return this.calcularSubtotal();
  }

  // Método para calcular la cantidad total de artículos en el carrito
  calcularCantidadTotal(): number {
    return this.contenedor.reduce((total, item) => total + item.cantidad, 0);
  }

  mostrarModal: boolean = false;

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  seleccionarUbicacion(ubicacion: string): void {
    console.log(`Ubicación seleccionada: ${ubicacion}`);
    this.mostrarModal = false;
    // Aquí puedes redirigir a otra página o realizar acciones según la ubicación
    window.location.href = 'https://buy.stripe.com/test_7sIcOgf0h4A2gYo9AA';
  }
}
