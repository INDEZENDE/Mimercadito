import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { CrearProductosComponent } from './componentes/crear-productos/crear-productos.component';
import { ConfirmarCreacionProductosComponent } from './componentes/confirmar-creacion-productos/confirmar-creacion-productos.component';
import { CrearUsuariosComponent } from './componentes/crear-usuarios/crear-usuarios.component';
import { ConfirmarCrearUsuariosComponent } from './componentes/confirmar-crear-usuarios/confirmar-crear-usuarios.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProductosComponent,
    UsuariosComponent,
    CrearProductosComponent,
    ConfirmarCreacionProductosComponent,
    CrearUsuariosComponent,
    ConfirmarCrearUsuariosComponent,
    MenuPrincipalComponent,
    PresentacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
