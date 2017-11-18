import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'pa-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((result) => {      
      this.users = result;
      console.log("users result:" + JSON.stringify(result));
    })
  }

  onSelectUser(user: User):void {
    console.log('user selected', user);
    //this.router.navigate(['user', user.id,'edit']);
  }

}
