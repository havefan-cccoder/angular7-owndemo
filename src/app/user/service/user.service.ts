import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Urls } from './url';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  })
};

const user = {
  username: 'testjj',
  password: '96E79218965EB72C92A549DD5A330112'
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private dataUrl = '/master/login';
  // private topicUrl = '/master/lightModel/baseInformation/getWeidu';

  login(): Observable<any> {
    // return this.http.post<any>(this.dataUrl, user);
    return this.http.post<any>(Urls.login, user);
  }

  getWeidu(): Observable<any> {
    // return this.http.get<any>(this.topicUrl, a);
    return this.http.get<any>(Urls.getWeidu, httpOptions);
  }
  constructor(private http: HttpClient) { }
}
