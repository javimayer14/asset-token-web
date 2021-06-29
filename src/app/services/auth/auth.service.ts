import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router, UrlSerializer } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';// This is where I import map operator

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private serializer: UrlSerializer) { }

  public login(username: string, password: string) : Observable<any> {
    const tree = this.router.createUrlTree(['oauth','token'])
    const url = 'http://localhost:8080'+this.serializer.serialize(tree);
    const headers = new HttpHeaders({
      'Authorization': 'Basic YW5ndWxhckFwcDoxMjM0NQ==',
      'Content-Type': 'application/x-www-form-urlencoded' }
    );  

    let body = new URLSearchParams();
    body.append('username', username);
    body.append('password', password);
    body.append('grant_type', 'password');

    let request = this.http.post<any>(url, body.toString(), { headers: headers })
      .pipe(map(token => {
        sessionStorage.setItem('_token', token.access_token);
        return token;
      }),
        catchError((error: HttpErrorResponse) => { 
          return throwError("An error ocurred. Please try again");
        })
      );

    return request;
  }
}
