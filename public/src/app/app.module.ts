import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products/products.component';
import { AllproductsComponent } from './products/allproducts/allproducts.component';
import { DetailsComponent } from './products/details/details.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AllproductsComponent,
    DetailsComponent,
    CreateComponent,
    EditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
