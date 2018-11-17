import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { DetailsComponent } from './products/details/details.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    {path: '', component: AllproductsComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'create', component: CreateComponent},
    {path: ':id', component: DetailsComponent},
  ]},
  // { path: 'products', pathMatch: 'full', redirectTo: '' },

  { path: '**', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
