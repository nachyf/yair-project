import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { GameService } from '../Yair.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  angForm: FormGroup;

  constructor(private gameservice: GameService, private fb: FormBuilder) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      name: [''],
      phone: [''],
      people: ['']
   });
  }

  addGame(name, phone, people) {
      this.gameservice.addGame(name, phone, people);
  }

  ngOnInit() {
  }

}
