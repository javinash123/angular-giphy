import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<object> = [];
  apiURL: string = 'http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=bzAQiZKxQqds6ftlsLH042bHCreEKkkp&limit=25';
  constructor(private httpClient: HttpClient) { }

  all(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}`).pipe(
    map(this.extractData));
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
