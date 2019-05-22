import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Urls } from './url';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: "Bearer " + localStorage.getItem("token")
  }),
};
const headers = new HttpHeaders({
  Authorization: "Bearer " + localStorage.getItem("token")
});
@Injectable({
  providedIn: 'root'
})
export class QuickmodelService {

  getResourcePoolList(data): Observable<any> {
    return this.http.post<any>(Urls.getResourcePoolList, data, httpOptions);
  }

  getModelList(data): Observable<any> {
    return this.http.post<any>(Urls.getModelList, data, { headers: headers });
  }

  getMyResource(data1, data2): Observable<any> {
    const params = new HttpParams({ fromObject: { type: data1.type, searchData: data1.searchData, topicId: data1.topicId } }); // url拼
    return this.http.post<any>(Urls.getMyResource, data2, { params, headers });
  }
  constructor(private http: HttpClient) { }
}