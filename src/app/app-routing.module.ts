import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { ModificarComponent } from './COMPONENTES/modificar/modificar.component';


//aqui tenemos todas nuestras rutas que nos redireccionan a cada metodo que queremos hacer
const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch:'full'},
  { path: 'inicio', component: InicioComponent},
  { path: 'add', component: AgregarComponent},
  { path: 'edit/:id', component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
