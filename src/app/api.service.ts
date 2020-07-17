import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICustomer } from './interfaces/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public  url : string = 'http://127.0.0.1:8080/fetch_data.php';
  constructor( private http : HttpClient) { }
  

  getData () : Observable<ICustomer[]> {
    let  headers = new HttpHeaders;
    // headers.append("Access-Control-Request-Method", 'GET');
    // headers.append("Access-Control-Request-Headers", 'Content-Type');
    // this.http.options<ICustomer[]>(this.url , {headers : headers});
    // console.log("hey");
    // headers = new HttpHeaders;
    // headers.append("Access-Control-Allow-Origin", '*');
		// headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
		// headers.append('Content-Type', 'application/json' );
    return this.http.get<ICustomer[]>(this.url , {headers : headers});
  }
}
