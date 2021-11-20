import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationSer {

  private baseURL='https://infinite-shelf-99308.herokuapp.com/api/UsersControllerConfirmation/authenticate';

  constructor(private http: HttpClient) { }

  Auth(user: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, user);
  }

}
