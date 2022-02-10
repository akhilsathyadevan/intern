import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    name:'',
    emailId:'',
    role:'',
    userName:'',
    password:''

  }

  constructor(private u_service:UsersService) { }

  ngOnInit(): void {
  }
  insertUsers(){
    this.u_service.insertUser(this.user)
    
  }

}
