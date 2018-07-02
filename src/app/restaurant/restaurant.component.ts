import { Component, OnInit } from '@angular/core';
import {RestaurantService}  from '../services/restaurant.service';
import {Restaurant} from '../models/restaurant.model'
import {FilterPipe} from '../filter.pipe';
import {Filter1Pipe} from '../filter1.pipe';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  
public query:any = ""; 

public Type:any = "";
 
public restaurants: Restaurant[];

 public showSelected: boolean;

 public selectRest:Restaurant;
    

  

 constructor(private restService: RestaurantService){

    this.showSelected = false;
   
 }

 ShowButton() {
        this.showSelected = true;
    }
    HideButton() {
        this.showSelected = false;
    }
    

 checkType(){

     this.Type = "פיצה";
    }

checkType1(){

  this.Type = "דגים";
}
checkType2(){

  this.Type = "";
}


  ngOnInit() {
    this.restaurants = this.restService.getRestuarents();
    
     
  }

  
  
}
