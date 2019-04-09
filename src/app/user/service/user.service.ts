import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const user = {
  username: 'testjj',
  password: '96E79218965EB72C92A549DD5A330112'
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataUrl = '/master/login';
  private topicUrl = '/master/lightModel/baseInformation/getWeidu';

  getData(): Observable<any> {
    return this.http.post<any>(this.dataUrl, user);
  }

  getTopic(a: any): Observable<any> {
    return this.http.get<any>(this.topicUrl, a);
  }
  constructor(private http: HttpClient) { }
}
