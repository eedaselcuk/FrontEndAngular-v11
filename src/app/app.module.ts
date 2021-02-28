import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { Interceptor } from './helpers/authinterceptor';
import { AuthService } from './service/auth.service';

const routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: '**', redirectTo: '/app', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'hospitals', component: HospitalsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HospitalsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],

  providers: [ Interceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
