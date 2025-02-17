import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { CartaComponent } from './carta/carta.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { ReservarComponent } from './reservar/reservar.component';
import { CambiarContraseniaComponent } from './cambiar-contrasenia/cambiar-contrasenia.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { AvisoLegalComponent } from './aviso-legal/aviso-legal.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'carrito-compra', component: CarritoCompraComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reservar', component: ReservarComponent },
  { path: 'cambiar-contrasenia', component: CambiarContraseniaComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent},
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
