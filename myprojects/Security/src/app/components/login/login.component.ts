import { UserResourceService } from './../../api/services/user-resource-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  constructor(
              private userService: UserResourceService
  ) {
    console.log(userService, 'userservice');

  }

  ngOnInit() {
  }

  login() {
    console.log(this.username);

    this.userService.loginUser({
      username: this.username,
      password: this.password
    }).subscribe((data) => {
      console.log('login is working', data);
    },
    (err) => {
        console.log(err);

    });
  }

}
