import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { TravelComponent } from './travel/travel.component';
import { CartComponent } from './cart/cart.component';
import { StorefrontComponent} from './storefront/storefront.component'

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'storefront', component: StorefrontComponent},
    {path: 'travel/:roverName', component: TravelComponent},
<<<<<<< HEAD
    {path: 'cart', component: CartComponent},

=======
    {path: 'storefront', component: StorefrontComponent},
>>>>>>> 880069dad291d973775ea1ca43d9a04e7838eca3
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}