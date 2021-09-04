import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from "../../models/User";
import {NgForm} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = true ;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  data: any;
  @ViewChild('userForm') form: any;

  constructor(private dataService: UserService) { }

  // this is a lifecycle method that runs on initialization (like the constructor)
  ngOnInit(): void {
    setTimeout(() => {
      this.dataService.getData().subscribe(data => {
        console.log(data);
      })
      this.dataService.getUsers().subscribe(users => {
        this.users = users;
        this.loaded = true;
      })

    }, 500);
    this.loaded = true;

  }

  onSubmit({value, valid}: NgForm){

    if(!valid){
      console.log('Form is not valid!')
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.dataService.addUser(value);
      this.form.reset();

    }
  }
}
