import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ProfileService {

  constructor(public http: Http) {}
  getProfile():Observable<any>{
    return this.http.get('https://api.github.com/users/laterbreh')
      .map(res => res.json());
  }
  getRepo():Observable<any>{
    return this.http.get('https://api.github.com/users/laterbreh/repos')
      .map(res => res.json());
  }

}
