import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientForm: FormGroup;
  name = new FormControl('');
  orgName = new FormControl('');
  contactNo = new FormControl('');
  email = new FormControl('');
  address = new FormControl('');
  address2 = new FormControl('');
  city = new FormControl('');
  state = new FormControl('');
  zipCode = new FormControl('');
  color = 'teal';
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(fb: FormBuilder) { 
    this.clientForm = fb.group({
      name: this.name,
      orgName: this.orgName,
      contactNo: this.contactNo,
      email: this.email,
      address: this.address,
      address2: this.address2,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode
    });
  }

  ngOnInit(): void {
  }

}
