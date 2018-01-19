import { Injectable } from '@angular/core';
import { Owner } from './owner';
import { OWNERS } from './mock-owners';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


// import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OwnerService {
  public API = 'http://localhost:4000/owner';
  getOwners(): Observable<Owner[]> {
    console.log(of(this.http.get(this.API)))





    // return of(OWNERS);
    return this.http.get<Owner[]>(this.API)
  }
  getOwner(id: number): Observable<Owner> {
    // Todo: send the message _after_ fetching the hero

    // return of(OWNERS.find(owner => owner.id === id));
    return this.http.get<Owner>(this.API+"/"+id)
  }

  /** PUT: update the hero on the server */
  updateOwner (owner: Owner): Observable<any> {
    return this.http.put(this.API+"/"+owner.id, owner)
  }


// private http: Http
  constructor(public http: HttpClient) {


  }

}
