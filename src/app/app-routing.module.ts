import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StorefrontComponent } from './storefront/storefront.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'browse', component: StorefrontComponent},
    {path: 'travel/:roverName', component: TravelComponent, canActivate: [AuthGuardService]},
    // {path: 'cart', component: CartComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}