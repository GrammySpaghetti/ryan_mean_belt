import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  products: Object[];

    constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

    ngOnInit() {
      this.products = [];
      this.getProducts();
    }

    getProducts(){
      console.log('Get Cakes function');
      let obs = this._httpService.getProducts();
      obs.subscribe(data => {
        console.log('got all products', data);
        for(var i=0; i<data['data'].length; i++){
          data['data'][i].price = parseFloat(data['data'][i].price).toFixed(2);
        }
        this.products = data['data'];
        console.log(this.products);
      });
    }

}
