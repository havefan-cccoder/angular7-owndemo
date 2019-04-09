import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  data: any[];

  login(): void {
    this.userService.getData().subscribe(data => {localStorage.setItem("token", data.token); });
  }

  getMeg(): void {
    this.userService.getTopic(httpOptions).subscribe(data =>{ this.data = data;})
  }

  constructor( private userService: UserService) { }

  ngOnInit() {
  }

}
