import { User } from './../../api/models/user';
import { UserResourceService } from './../../api/services/user-resource-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user:User;
  username;
  password;

  constructor( private userService: UserResourceService
              ) {
                console.log(this.userService,"const");

               }

  ngOnInit() {
  }

  signup() {

    this.userService.createUser({
      username: this.username,
      password: this.password

    }).subscribe((data) => {
      console.log('signup succesfully done', data);

    });

 }

}
