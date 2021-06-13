import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private serializer: UrlSerializer) { }

  public login(username: string, password: string) : Observable<any> {
    const tree = this.router.createUrlTree(['oauth', 'token'])
    const url = `http://localhost:8080${this.serializer.serialize(tree)}`;
    const headers = new HttpHeaders({
      'Authorization': 'Basic YW5ndWxhckFwcDoxMjM0NQ==',
      'Content-Type': 'Authorization' }
    );  

    let request = this.http.post<any>(url, { 
      'username': username,
      'password': password,
      'grant_type': 'password'
    }, { headers: headers });

    return request;
  }
}
