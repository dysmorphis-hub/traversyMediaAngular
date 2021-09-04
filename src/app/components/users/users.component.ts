import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true ;
  enableAdd: boolean = true;
  private e: any;

  constructor() { }

  // this is a lifecycle method that runs on initialization (like the constructor)
  ngOnInit(): void {
    setTimeout(() => {
      this.users = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 70,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('03/11/2017 06:30:00'),
          hide: false
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill',
            city: 'Miami',
            state: 'FL'
          },
          isActive: true,
          registered: new Date('03/003/2021 08:30:00'),
          hide: true
        }]

    }, 2000);
    this.loaded = true;

  }

  addUser(user: User){
    this.users.push(user);
  }

  fireEvent(e: any){

    console.log(e.type);

  }


}
