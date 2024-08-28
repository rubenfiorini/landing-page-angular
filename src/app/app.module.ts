import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PoductDetailComponent } from './poduct-detail/poduct-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DniComponent } from './contacto/dni/dni.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosComponent,
    ContactoComponent,
    PoductDetailComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//formularios de tipo plantilla
    ReactiveFormsModule,//formularios de tipo reactivos
    HttpClientModule  //para hacer petiones http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
