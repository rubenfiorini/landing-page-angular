import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoductDetailComponent } from './poduct-detail/poduct-detail.component';
 
//cada ruta va a ser un objeto
//estructura del obj {path:'nombreRuta', component: nombreComponente},
const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'productos', component: ProductosComponent},
  {path:'productos/:productoId', component: PoductDetailComponent}, //cuando pasamos un parametro utilizamos:/parametro
  {path:'contacto', component: ContactoComponent},
  //cuando el path es cualquier cosa -> ** ->rediirigimos a '' o sea al Home
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
