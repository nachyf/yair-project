import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {


public hotels:string[];

public price:number;

 constructor(){


 }

ngOnInit(){

  this.hotels = ["קינג דיויד" ,"מצודת דוד","וולדוף אסטוריה","ענבל"]
  this.price = Math.floor(2383*Math.random())


}
  
}