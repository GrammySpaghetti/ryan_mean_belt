import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts(){
  console.log('service getting all products');
  return this._http.get('/api/products');
  }

  deleteProduct(product_id){
    return this._http.delete('/api/delete/'+product_id);
  }

  getProductId(product_id){
    return this._http.get('/api/products/'+product_id);
  }

  updateProduct(product){
    console.log('sending to update', product);
    return this._http.put('/api/update/'+product['_id'], product);
  }

  newProduct(product){
    return this._http.post('/api/create', product);
  }

}
