import { Injectable } from '@angular/core';
import {Customer} from '../models/customers.model'

@Injectable()
export class CustomersService {

  public customersArray:Customer[] = new Array<Customer>();

  constructor() { }

  public addCusromers(customer : Customer){
      this.customersArray.push(customer); 
}

public getCustomers(): Customer[]{
  return this.customersArray;
}


}