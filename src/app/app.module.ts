import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { RegisterSalonComponent } from './register-salon/register-salon.component';
import { RegisterStylistComponent } from './register-stylist/register-stylist.component';
import { LoginSalonComponent } from './login-salon/login-salon.component';
import { LoginStylistComponent } from './login-stylist/login-stylist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app/material.module';
import { ColoringServicesTables } from './coloring-services-tables/coloring-services-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    RegisterSalonComponent,
    RegisterStylistComponent,
    LoginSalonComponent,
    LoginStylistComponent,
    ColoringServicesTables
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MaterialModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
