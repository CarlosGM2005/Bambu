import { Component, OnInit  } from '@angular/core';
import { ConsumoApiService } from '../../services/consumo-api.service'; 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  locales: any[] = []; // Variable para almacenar los locales
  mostrarCookieBanner = true;
  
  constructor(private apiService: ConsumoApiService) { }

  ngOnInit(): void {
    if (localStorage.getItem('cookie') !== null) {
      this.mostrarCookieBanner = false;
    }

    this.apiService.obtenerLocales().subscribe(
      response => {
        if (response.status === 'success') {
          this.locales = response.data; // Guardamos los locales recibidos
        } else {
          console.error('Error al obtener locales:', response.data);
        }
      },
      error => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

  aceptarCookies(): void {
    localStorage.setItem('cookie', 'true'); 
    this.mostrarCookieBanner = false;
  }

  rechazarCookies(): void {
    localStorage.setItem('cookie', 'false'); 
    this.mostrarCookieBanner = false;
  }

}
