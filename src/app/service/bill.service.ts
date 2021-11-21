import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  private baseURL='https://infinite-shelf-99308.herokuapp.com/api/Bill';

  constructor(private http: HttpClient) { }

  
  insertUser(user: Object): Observable< Object> {
    return this.http.post(`${this.baseURL}`, user);
  }

  createBill(user: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, user);
  }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

}
