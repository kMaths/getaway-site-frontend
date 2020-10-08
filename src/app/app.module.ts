import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './services/jwt.interceptor.service';
import { ErrorInterceptor } from './services/error.interceptor.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TravelModule } from './travel/travel.module';
import { StorefrontComponent } from './storefront/storefront.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    StorefrontComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    TravelModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,
    NoopAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
