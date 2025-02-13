import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../../services/consumo-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent implements OnInit {
  productosFiltrados: any[] = [];
  categoria: string = 'surtidos';
  miFormulario: FormGroup;
  mensajeError: boolean = false;
  mensajeInicioSesion: boolean = false;

  constructor(private apiService: ConsumoApiService, private router: Router) {
    this.miFormulario = new FormGroup({
      location: new FormControl('', [Validators.required])
    });
  }


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

  filtrarPorCategoria(event: Event, categoria: string) {
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

  contenedor: any[] = [{
    importeTotal: 0,
    productos: []
  }];

  // Método para añadir un producto al contenedor
  onAddProduct(producto: any) {
    const index = this.contenedor[0].productos.findIndex((item: any) => item.nombre_plato === producto.nombre_plato);
    producto.precio = parseFloat(producto.precio);

    if (index > -1) {
      // Si ya existe el producto, aumentamos la cantidad
      this.contenedor[0].productos[index].cantidad++;
      this.contenedor[0].productos[index].total = parseFloat((this.contenedor[0].productos[index].cantidad * producto.precio).toFixed(2)); // Redondeo
    } else {
      // Si no existe, lo añadimos
      this.contenedor[0].productos.push({
        ...producto,
        cantidad: 1, // Inicia con una cantidad de 1
        total: parseFloat(producto.precio.toFixed(2)), // Redondeo
        urlImgMenos: "../../assets/images/iconos/signo-menos.png",
        urlImgMas: "../../assets/images/iconos/signo-mas.png"
      });
    }

    // Recalculamos el importe total del carrito
    this.calcularImporteTotal();
  }

  // Método para incrementar la cantidad de un producto
  incrementarCantidad(item: any) {
    item.cantidad++;
    item.total = parseFloat((item.cantidad * item.precio).toFixed(2)); // Redondeo

    // Recalculamos el importe total después de modificar un producto
    this.calcularImporteTotal();
  }

  // Método para reducir la cantidad de un producto
  reducirCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
      item.total = parseFloat((item.cantidad * item.precio).toFixed(2)); // Redondeo
    } else {
      // Si la cantidad llega a 0, lo eliminamos del contenedor
      this.contenedor[0].productos = this.contenedor[0].productos.filter((producto: any) => producto !== item);
    }

    // Recalculamos el importe total después de modificar un producto
    this.calcularImporteTotal();
  }

  // Método para calcular el importe total del carrito
  calcularImporteTotal() {// Redondeamos el total
    return this.calcularSubtotal();
  }

  // Método para calcular la cantidad total de artículos en el carrito
  calcularCantidadTotal(): number {
    this.contenedor[0].importeTotal = this.calcularSubtotal();
    return this.contenedor[0].productos.reduce((total: number, item: any) => total + item.cantidad, 0);
  }

  // Método para calcular el subtotal del carrito
  calcularSubtotal(): number {
    return parseFloat(this.contenedor[0].productos.reduce((sum: number, item: any) => sum + item.total, 0).toFixed(2));
  }

  //Controlar que escoje el local
  pedir() {
    //Controlamos que haya iniciado sesion
    if (this.apiService.user.nombre) {
      if (this.miFormulario.invalid) {
        this.mensajeError = true;
      } else {
        this.apiService.pedir(this.miFormulario.value.location, this.contenedor, this.apiService.user.dni, this.apiService.user.email,  this.apiService.token).subscribe(
          response => {
            if (response.status === 'success') {
              //utilizar nodemail para enviar la compra
              this.router.navigate(['/carrito-compra']);
              window.open('https://buy.stripe.com/test_7sIcOgf0h4A2gYo9AA', '_blank');
            } else {
              console.error('Error al obtener los productos:', response.data);
            }
          },
          error => {
            console.error('Error en la solicitud:', error);
          }
        );
      } 
    } else {
          this.mensajeInicioSesion = true;
    }
  }

  }
