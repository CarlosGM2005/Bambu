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

const routes: Routes = [
  { path: '', component: MainComponent },
  {path: 'header', component:HeaderComponent},
  {path: 'footer', component:FooterComponent},
  { path: 'carta', component: CartaComponent },
  { path: 'carrito', component: CarritoCompraComponent },
  { path: 'registrarse', component: RegistrarseComponent },
  { path: 'login', component: LoginComponent }, 
  { path: 'reservar', component: ReservarComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
