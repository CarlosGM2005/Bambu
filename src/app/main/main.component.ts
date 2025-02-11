import { Component, OnInit  } from '@angular/core';
import { ConsumoApiService } from '../consumo-api.service'; 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  locales: any[] = []; // Variable para almacenar los locales

  constructor(private apiService: ConsumoApiService) { }

  ngOnInit(): void {
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
}
