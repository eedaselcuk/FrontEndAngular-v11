import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { LoginComponent } from './components/login/login.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { RegisterComponent } from './components/register/register.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin = false;
  email?: string;

  submitted = false;

  constructor(private router:Router) {

    this.isLogin = !this.router;
  }

  ngOnInit() {

  }

  toLogin = () => {
    this.router.navigate(['/login']);
  }

  toRegister = () => {
    this.router.navigate(['/register']);
  }

}

