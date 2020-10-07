import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelModule } from './travel/travel.module';
// import { CartComponent } from './cart/cart.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ArtworkComponent } from './artwork/artwork.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    // CartComponent,
    StorefrontComponent,
    ArtworkComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    TravelModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){   
  }
 }
