import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.scss']
})
export class CarritoCompraComponent {
  categorias = {
    entrantes: [
      {
        nombre: 'California Roll',
        foto: 'https://via.placeholder.com/150?text=California+Roll',
        precio: 5.99,
        icono: 'https://via.placeholder.com/50?text=Icon+Roll'
      },
      {
        nombre: 'Tuna Roll',
        foto: 'https://via.placeholder.com/150?text=Tuna+Roll',
        precio: 6.49,
        icono: 'https://via.placeholder.com/50?text=Icon+Roll'
      },
      {
        nombre: 'Spicy Tuna Roll',
        foto: 'https://via.placeholder.com/150?text=Spicy+Tuna+Roll',
        precio: 6.99,
        icono: 'https://via.placeholder.com/50?text=Icon+Roll'
      }
    ],
    postres: [
      {
        nombre: 'Salmon Sashimi',
        foto: 'https://via.placeholder.com/150?text=Salmon+Sashimi',
        precio: 7.99,
        icono: 'https://via.placeholder.com/50?text=Icon+Sashimi'
      },
      {
        nombre: 'Tuna Sashimi',
        foto: 'https://via.placeholder.com/150?text=Tuna+Sashimi',
        precio: 8.49,
        icono: 'https://via.placeholder.com/50?text=Icon+Sashimi'
      },
      {
        nombre: 'Ebi Nigiri',
        foto: 'https://via.placeholder.com/150?text=Ebi+Nigiri',
        precio: 5.49,
        icono: 'https://via.placeholder.com/50?text=Icon+Nigiri'
      }
    ]
  };


}
