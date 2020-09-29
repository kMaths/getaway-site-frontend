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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CartComponent,
    StorefrontComponent,
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
