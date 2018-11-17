import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  err: Object[];
  product_id: Number;
  product: Object;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
     console.log(`The parent params: ${params.id}`);
     this.product_id = params.id;
    });
    this.err = [];
    this.getProductId();
  }

  getProductId(){
    console.log('at get productid');
    let obs = this._httpService.getProductId(this.product_id);
    obs.subscribe(data => {
      console.log('product by id', data);
      data['data'].price = parseFloat(data['data'].price).toFixed(2);
      this.product = data['data'];
    });
  }

  deleteProduct(product_id){
      let obs = this._httpService.deleteProduct(product_id);
      if(this.product['qty'] < 1){
        obs.subscribe(data => {
          console.log('deleted', data);
        });
        this._router.navigate(['/products']);
      }
      else{
        this.err[0] = 'Cannot delete unless quantity is 0';
      }
  }

}
