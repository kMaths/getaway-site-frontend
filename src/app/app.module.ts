import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { TravelComponent } from './travel/travel.component';
import { TravelModule } from './travel/travel.module';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from '@angular/common/http';
import { StorefrontComponent } from './storefront/storefront.component';
=======
import { TravelModule } from './travel/travel.module';
import { HttpClientModule } from '@angular/common/http';
import { StorefrontComponent } from './storefront/storefront.component';


>>>>>>> 880069dad291d973775ea1ca43d9a04e7838eca3

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
<<<<<<< HEAD
    CartComponent,
=======
>>>>>>> 880069dad291d973775ea1ca43d9a04e7838eca3
    StorefrontComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
<<<<<<< HEAD
    TravelModule
    // HttpClientModule,
=======
    TravelModule,
    HttpClientModule,
    FormsModule
>>>>>>> 880069dad291d973775ea1ca43d9a04e7838eca3
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){   
  }
 }
