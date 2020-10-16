import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CartComponent } from './store/cart/cart.component';
import { StorefrontComponent } from './store/storefront/storefront.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'home', redirectTo: ''},
    {path: 'login', component: LoginComponent},
    {path: 'store', component: StorefrontComponent, canActivate: [AuthGuardService]},
    {path: 'travel/:roverName', component: TravelComponent, canActivate: [AuthGuardService]},
    {path: 'cart', component: CartComponent, canActivate: [AuthGuardService]},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}