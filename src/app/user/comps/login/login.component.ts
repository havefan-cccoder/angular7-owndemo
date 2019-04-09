import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  data: any[];

  login(): void {
    this.userService.login().subscribe(data => {localStorage.setItem("token", data.token); });
  }

  getMeg(): void {
    this.userService.getWeidu().subscribe(data => { this.data = data; });
  }

  constructor( private userService: UserService) { }

  ngOnInit() {
  }

}
