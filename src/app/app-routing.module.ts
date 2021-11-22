import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'presentacion', component: PresentacionComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: '/presentacion', pathMatch: 'full'},
  { path: '*', component: PresentacionComponent}
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot (routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
