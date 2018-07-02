import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})
export class GameService {

  uri: String = 'http://localhost:4000/games';

  constructor(private http: HttpClient) { }

  addGame(name,price,people) {
    const obj = {
    name: name,
    price: price,
    people:people
    };
    this
      .http
      .post(`${this.uri}/add`, obj)
      .subscribe(res => 
        console.log('Done')
      );
  }

  
  


  
}
