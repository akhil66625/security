import { UserResourceService } from './../../api/services/user-resource-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserResourceService) { }

  ngOnInit() {
  }

  getAllUser() {
    this.userService.getAllUser().subscribe((data) => {
      console.log(data);

    });
  }

}
