import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IVoie } from '../interfaces/voie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoiesService {

  public  url : string;
  constructor( private http : HttpClient) { }
  getSimplesVoies (idSecteur : number) : Observable<IVoie[]> {
    this.url = 'http://127.0.0.1:8080/voie/simpleVoie/'+idSecteur;
    let  headers = new HttpHeaders;
    // headers.append("Access-Control-Request-Method", 'GET');
    // headers.append("Access-Control-Request-Headers", 'Content-Type');
    // this.http.options<ICustomer[]>(this.url , {headers : headers});
    // console.log("hey");
    // headers = new HttpHeaders;
    // headers.append("Access-Control-Allow-Origin", '*');
		// headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
		// headers.append('Content-Type', 'application/json' );
    return this.http.get<IVoie[]>(this.url , {headers : headers});
  }

  getGrandesVoies (idSecteur : number) : Observable<IVoie[]> {
    this.url = 'http://127.0.0.1:8080/voie/grandeVoie/'+idSecteur;
    let  headers = new HttpHeaders;
    // headers.append("Access-Control-Request-Method", 'GET');
    // headers.append("Access-Control-Request-Headers", 'Content-Type');
    // this.http.options<ICustomer[]>(this.url , {headers : headers});
    // console.log("hey");
    // headers = new HttpHeaders;
    // headers.append("Access-Control-Allow-Origin", '*');
		// headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
		// headers.append('Content-Type', 'application/json' );
    return this.http.get<IVoie[]>(this.url , {headers : headers});
  }

  getBlocs (idSecteur : number) : Observable<IVoie[]> {
    this.url = 'http://127.0.0.1:8080/voie/bloc/'+idSecteur;
    let  headers = new HttpHeaders;
    // headers.append("Access-Control-Request-Method", 'GET');
    // headers.append("Access-Control-Request-Headers", 'Content-Type');
    // this.http.options<ICustomer[]>(this.url , {headers : headers});
    // console.log("hey");
    // headers = new HttpHeaders;
    // headers.append("Access-Control-Allow-Origin", '*');
		// headers.append("Access-Control-Allow-Methods", 'POST, GET, OPTIONS, DELETE');
		// headers.append('Content-Type', 'application/json' );
    return this.http.get<IVoie[]>(this.url , {headers : headers});
  }

}
