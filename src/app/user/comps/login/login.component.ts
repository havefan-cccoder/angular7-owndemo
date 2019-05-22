import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { from } from 'rxjs';
import { Md5 } from "ts-md5";
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
    password: null
  }; // 这里是定义变量（属性）
  login(): void {
    const user = Object.assign({}, this.user);
    user.password = Md5.hashStr(this.user.password);
    this.userService.login(user).subscribe(data => {if(data.token){localStorage.setItem("token", data.token); this.router.navigate(['quickmodel']);} });
  }

  loginEnter(e: any): void {
    if(e.keyCode == 13){
      const user = Object.assign({}, this.user);
    user.password = Md5.hashStr(this.user.password);
    this.userService.login(user).subscribe(data => {if(data.token){localStorage.setItem("token", data.token); this.router.navigate(['quickmodel']);} });
    }
  }

  getMeg(): void {
    this.userService.getWeidu().subscribe(data => { this.data = data; });
  }

  constructor( private userService: UserService, public router: Router) { }

  ngOnInit() {
  }

}
