import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product: Object;
  product_id: Number;
  err_name: Object;
  err_qty: Object;
  err_price: Object;
  err: Object[];

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
     console.log(`The parent params: ${params}`);
     this.product_id = params.id;
    });
    this.getProductId();
    this.product = {};
    this.err_name = {};
    this.err_qty= {};
    this.err_price = {};
    this.err = [];
  }

  getProductId(){
    let obs = this._httpService.getProductId(this.product_id);
    obs.subscribe(data => {
      console.log('product by id', data);
      this.product = data['data'];
    });
  }
  updateProduct(product){
    console.log('update please');
    this.err = [];
    let obs = this._httpService.updateProduct(product);
    obs.subscribe(data => {
      console.log('product update', data);
      if(data['err'] != null){
        console.log('errors', data['err'])
        this.err = data['err'];
      }
      else{
        this._router.navigate(['/products']);
      }

    })
  }

  deleteProduct(product_id){
    let obs = this._httpService.deleteProduct(product_id);
    obs.subscribe(data => {
      console.log('deleted', data);
    });
    this._router.navigate(['/products']);

  }

  resetProduct(){
    this.getProductId();
  }

}
