import { Component, OnInit } from '@angular/core';
//importamos los productos
import { productsList } from './productos.mocks';
import { IProduct } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  //inicializamos una variable con los productos
   
  //productList = productsList;

  //inicializamos la lista de tipo IProduct y arra y vacio
  productList: IProduct[] = [];

  constructor(private _apiService: ApiService){}

  ngOnInit(): void {
    this._apiService.getAllProducts().subscribe((data: IProduct[]) => {
      console.log(data);
      this.productList = data;
    })
  }
  
}
