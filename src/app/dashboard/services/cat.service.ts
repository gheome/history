import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CatService {
  constructor(public http: HttpClient) { }

  public getCat(): Observable<any> {
    return this.http.get('https://api.thecatapi.com/v1/images/search');
  }
}
