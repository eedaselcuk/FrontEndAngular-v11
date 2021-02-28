import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  hospitals: any[] = [
  {
    id: 1,    "city": "Istanbul",    "name": "Mega Hospital" , "address":"Sisli Istanbul" },
  {
    id: 2,   "city": "Ankara",    "name": "Mega Hospital" , "address":"Etimesgut Ankara" },
  {
    id: 3,    "city": "Antalya",    "name": "Mega Hospital" , "address":"Alanya Antalya"  },
  {
    id: 4,    "city": "Bursa",    "name": "Mega Hospital" , "address":"Nilüfer Bursa" },
  {
    id: 5,    "city": "Izmir",    "name": "Mega Hospital" , "address":"Bornova Izmir" }
  ];

}
