import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../productos/productos.mocks';

@Component({
  selector: 'app-poduct-detail',
  templateUrl: './poduct-detail.component.html',
  styleUrls: ['./poduct-detail.component.css']
})
//vamos a injectar el activate route y consumir lo que nos trae la URL
export class PoductDetailComponent implements OnInit{

  product?: Product; //aca vamos a guardar el producto para luego mostrarlo
  productList: Product[] = productsList; //creamos una array con toda la lista de productos
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute){}
  
  ngOnInit(): void {
    /*
    //cuando carga el componente tomamos lo del browser y seteamos las variable 
    this._route.params.subscribe(params =>{
      //console.log (params['productoId']);
      //category viene de -> :category/:productoId de app-routing

      //ponemos al product el objeto que encontramos en el array de objetos de productos
      this.product = this.productList.find(product => product.id == params['productoId']);
    })
    */

    //Simulamos una demora en la carga de product
    setTimeout(() => {
      //cuando carga el componente tomamos lo del browser y seteamos las variable 
      this._route.params.subscribe(params =>{
        //console.log (params['productoId']);
        //category viene de -> :category/:productoId de app-routing

        //ponemos al product el objeto que encontramos en el array de objetos de productos
        this.product = this.productList.find(product => product.id == params['productoId']);
        this.color = this.product?.price as number > 5 ? 'red' : '';
        this.loading = false;
      })

    }, 2000);
    
  }
}
