import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelComponent } from './travel/travel.component';
import { TravelModule } from './travel/travel.module';
import {HttpClientModule} from '@angular/common/http';
import { StorefrontComponent } from './storefront/storefront.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './shopping-cart/product-list/product-list.component';
import { FiltersComponent } from './shopping-cart/filters/filters.component';
import { CartItemComponent } from './shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './shopping-cart/product-list/product-item/product-item.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TravelComponent,
    NavbarComponent,
    StorefrontComponent,
    ShoppingCartComponent,
    ProductListComponent,
    FiltersComponent,
    CartItemComponent,
    ProductItemComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    TravelModule,
    FormsModule,
     HttpClientModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){   
  }
 }
