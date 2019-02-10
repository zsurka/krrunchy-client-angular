import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Menu } from './Menu';
import { environment } from '../environments/environment';

// import * as data from './data.json';

const API_URL = environment.apiUrl;
// const WORD = (<any>data).name;

@Injectable({
  providedIn: 'root'
})
export class KrrunchyBackendService {

  constructor(private http: HttpClient) {

  }

  public getAllMenus(): Observable<Menu[]>  {
    this.parseJSON();
    return this.http.get<Menu[]>(API_URL + '/menus/all');
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  private parseJSON() {
    // const json=require('./data.json');
    this.http.get('./assets/data.json').subscribe(data => console.log('this is ' + data));
    // console.log('this is ' + WORD);
  }
}
