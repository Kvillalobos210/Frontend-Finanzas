import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Portfolio } from '../model/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private baseURL='https://infinite-shelf-99308.herokuapp.com/api/Portfolio';

  constructor(private http: HttpClient) { }

  
  insertUser(user: Object): Observable< Object> {
    return this.http.post(`${this.baseURL}`, user);
  }

  createUser(user: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, user);
  }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  updateList(id:number, p:Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`,p);
  }

}
