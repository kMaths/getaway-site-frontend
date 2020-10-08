import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TravelComponent } from './travel/travel.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    {path: 'home', redirectTo: ''},
    {path: 'login', component: LoginComponent},
    {path: 'store', component: StorefrontComponent},
    {path: 'travel/:roverName', component: TravelComponent},
    {path: 'cart', component: CartComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}