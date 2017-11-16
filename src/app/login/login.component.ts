import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UserManager } from '../shared/model/user-manager';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'pa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userManager: UserManager;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onLogin(userManager: UserManager){
    this.userService.getLogin(userManager.username, userManager.password).subscribe(result =>{
      console.log('Login result', result);
    })
  }

}
