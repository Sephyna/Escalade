import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISite } from '../interfaces/site';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  private url : string;
  constructor( private http : HttpClient) { }
  

  getSites () : Observable<ISite[]> {
    this.url = 'http://127.0.0.1:8080/site';
    let  headers = new HttpHeaders;
    // headers.append("Access-Control-Request-Method", 'GET');
    // headers.append("Access-Control-Request-Headers", 'Content-Type');
    // this.http.options<ICustomer[]>(this.url , {headers : headers});
    // console.log("hey");
    // headers = new HttpHeaders;
    // headers.append("Access-Control-Allow-Origin", '*');
		// headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
		// headers.append('Content-Type', 'application/json' );
    return this.http.get<ISite[]>(this.url , {headers : headers});
  }

  getSite (id : number) : Observable<ISite> {
    this.url = 'http://127.0.0.1:8080/site/'+id;
    let  headers = new HttpHeaders;
    // headers.append("Access-Control-Request-Method", 'GET');
    // headers.append("Access-Control-Request-Headers", 'Content-Type');
    // this.http.options<ICustomer[]>(this.url , {headers : headers});
    // console.log("hey");
    // headers = new HttpHeaders;
    // headers.append("Access-Control-Allow-Origin", '*');
		// headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
    // headers.append('Content-Type', 'application/json' );    
    return this.http.get<ISite>(this.url , {headers : headers});


  }
}
