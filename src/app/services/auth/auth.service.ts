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
    const tree = this.router.createUrlTree(['api', 'oauth', 'token'])
    const url = this.serializer.serialize(tree);
    const headers = new HttpHeaders({
      'Authorization': 'Basic YW5ndWxhckFwcDoxMjM0NQ==',
      'Content-Type': 'application/x-www-form-urlencoded' }
    );  

    let body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);
    body.append('grant_type', 'password');

    let request = this.http.post<any>(url, body.toString(), { headers: headers });

    return request;
  }
}
