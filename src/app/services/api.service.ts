import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'

  //creamos un pivate que va a ser el cliente http
  constructor(private _httpCliente: HttpClient) { }

  //metodo que consume la api y devuelve un observable con la lista de productos (array)
  public getAllProducts(): Observable <IProduct[]>{
    return this._httpCliente.get<IProduct[]>(this.baseURL);
  }
  //metodo que consume la lista de productos y devuelve un observable con un solo producto
  public getProduct(id: number | string): Observable <IProduct>{
    return this._httpCliente.get<IProduct>(`${this.baseURL}/${id}`);
  }

  //metodo que consume la lista de categorias y devuelve un observable con la lista de categorias (array)
  public getAllCategories(): Observable<Category[]>{
    return this._httpCliente.get<Category[]>(`${this.baseURL}/categories`);
  }

  //metodo inserta un producto
  public newProduct(product: IProduct): Observable<IProduct>{
    return this._httpCliente.post<IProduct>(`${this.baseURL}`, product);
  }

  //metodo para actualizar un producto
  public updateProduct(id: number | string, product: IProduct): Observable<IProduct>{
    return this._httpCliente.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  //metodo para eliminar un producto
  public deleteProduct(id: number | string): Observable<IProduct>{
    return this._httpCliente.delete<IProduct>(`${this.baseURL}/${id}`);
  }
} 
