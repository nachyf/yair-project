import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestaurantService} from '../services/restaurant.service';
import {Restaurant} from '../models/restaurant.model';
import {Customer} from '../models/customers.model';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
import { GameService } from '../Yair.service';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  public restaurants: Restaurant[];
  public restaurant: Restaurant;
  public Time: Date;
  public time: string;
  public showSelected: boolean;
  public angForm: FormGroup;

  // public InvitationForm:FormGroup;
  // public nameControl:FormControl;
  // public phoneControl:FormControl;
  // public numControl:FormControl;




  public id: number;
  private sub: any;


  constructor(private activatedRoute: ActivatedRoute, private restService: RestaurantService,
    private gameservice: GameService, private fb: FormBuilder) {
    //  this.nameControl = new FormControl("");
    //   this.phoneControl = new FormControl("");
    //   this.numControl = new FormControl("");
    //   this.InvitationForm = new FormGroup({
    //     nameControl:this.nameControl,
    //     phoneControl:this.phoneControl,
    //     numControl:this.numControl,

    //   });

    this.createForm();


    this.Time = new Date();
    this.showSelected = false;

   }
// public addCusromers():void {
//         let customer = new Customer(this.nameControl.value,this.phoneControl.value,
//             this.numControl.value);
//              //alert(JSON.stringify(customer));//product));
//             console.log(this.InvitationForm);

//           this.cusService.addCusromers(customer);


//             // alert("הזמנתך בוצע בהצלחה!")
//    }

createForm() {
  this.angForm = this.fb.group({
    name: [''],
    price: [''],
    people: ['']
 });
}

addGame(name, phone, people) {
    this.gameservice.addGame(name, phone, people);
}


closeModal() {

  $(document).ready(function(){

        $('#myModal').hide();
    });

}



 ShowButton() {
        this.showSelected = true;
    }
    HideButton() {
        this.showSelected = false;
    }



  ngOnInit(){

      this.sub = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id']; });
this.restaurants = this.restService.getRestuarents();

if (this.Time.getHours() < 22 && this.Time.getHours() > 10 ) {

     this.time = 'פתוח ';
}
// tslint:disable-next-line:one-line
else{

   this.time = 'המסעדה סגורה כעת';
}


  }




   }
