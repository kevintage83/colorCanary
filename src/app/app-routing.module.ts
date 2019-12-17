import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginSalonComponent } from './login-salon/login-salon.component';
import { LoginStylistComponent } from './login-stylist/login-stylist.component';
import { RegisterSalonComponent } from './register-salon/register-salon.component';
import { RegisterStylistComponent } from './register-stylist/register-stylist.component';
import { HomeComponent } from './home/home.component';
import { ColoringServicesTables } from './coloring-services-tables/coloring-services-tables.component';

const routes: Routes = [
  { path: 'registerSalon', component: RegisterSalonComponent },
  { path: 'registerStylist', component: RegisterStylistComponent },
  { path: 'loginSalon', component: LoginSalonComponent },
  { path: 'loginStylist', component: LoginStylistComponent },
  { path: 'home', component: HomeComponent },
  { path: 'coloringServices', component: ColoringServicesTables },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
