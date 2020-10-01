import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelComponent } from './travel/travel.component';
import { TravelModule } from './travel/travel.module';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { StorefrontComponent } from './storefront/storefront.component';
import { AddToCartComponent } from './shared/cart/add-to-cart/add-to-cart.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { CartItemComponent } from './componenets/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CartComponent,
    StorefrontComponent,
    AddToCartComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductListComponent,
    FiltersComponent,
    CartItemComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    TravelModule
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){   
  }
 }
