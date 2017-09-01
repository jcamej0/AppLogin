import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class apiService {
constructor(private http: Http){}



apiCall(email,password){
  	let headers = new Headers({
    'Accept':'application/json',
	'Accept-Language':'es-ES,es;q=0.8',
	'App':'APP_WEB',
	'Content-Type':'application/json',
	'Password':password
	})
	let options = new RequestOptions({
      headers: headers
    });


	return this.http.put('https://dev.tuten.cl/TutenREST/rest/user/'+email,'',options)
	.map(res => res.json())
	.toPromise();
}
}