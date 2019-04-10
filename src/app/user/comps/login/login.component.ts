import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { from } from 'rxjs';
// const user = {
//   username: '555',
//   password: '555'
// }; // 这里是定义常量
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  data: any[];
  user = {
    username: '',
    password: ''
  }; // 这里是定义变量（属性）
  login(): void {
    this.userService.login(this.user).subscribe(data => {localStorage.setItem("token", data.token); });
  }

  getMeg(): void {
    this.userService.getWeidu().subscribe(data => { this.data = data; });
  }

  constructor( private userService: UserService) { }

  ngOnInit() {
  }

}
