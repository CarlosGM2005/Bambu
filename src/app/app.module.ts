import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsumoApiService } from './consumo-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { CartaComponent } from './carta/carta.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';
import { ReservarComponent } from './reservar/reservar.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { PoliticaPrivacidadComponent } from './politica-privacidad/politica-privacidad.component';
import { CambiarContraseniaComponent } from './cambiar-contrasenia/cambiar-contrasenia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CarritoCompraComponent,
    CartaComponent,
    RegistrarseComponent,
    LoginComponent,
    ReservarComponent,
    AyudaComponent,
    PoliticaPrivacidadComponent,
    CambiarContraseniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConsumoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
