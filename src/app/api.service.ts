import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('admin:password'),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  })
};



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  public getCustomers() {
    var API = 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-12&sortBy=publishedAt&apiKey=60a6112ecd374285abd4052bf012341b';
    console.log('In service call--1->');

    var API2 = 'http://localhost:8082/backoffice/getcustomers';
    //const xhr = new XMLHttpRequest();
    // const url = 'https://bar.other/resources/public-data/';

    //xhr.open('GET', url);
    //        xhr.onreadystatechange = someHandler;
    //        xhr.send(); 
    //        var headers = new Headers();
    //          headers.append('Authorization', 'Basic ' +  btoa('admin:password'));
    //        headers.append('Access-Control-Allow-Origin', '*');

    //    return this.httpClient.get(`http://localhost:8082/backoffice/getcustomers`,httpOptions);
    return this.httpClient.get(`${API2}`, httpOptions);
    //        return this.httpClient.get('http://localhost:8082/backoffice/getcustomers');


  }

  getCustomerList(): Observable<Object> {
    let API2 = 'http://localhost:8082/backoffice/getcustomers';
    return this.httpClient.get(`${API2}`).pipe(
      tap(data => console.log('ALL: ' + JSON.stringify(data))),
      catchError(this.handleError)

    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);

  }

  public getTasklists() {
    console.log('In getTasklists call--1->');
    let API2 = 'http://localhost:8082/backoffice/gettasks';
    return this.httpClient.get(`${API2}`, httpOptions);
  }

  public getOrderlists() {
    console.log('In getOrderlists call--1->');
    let API2 = 'http://localhost:8082/backoffice/getorders';
    return this.httpClient.get(`${API2}`, httpOptions);

  }
  public updateTasks(data) {
    let API3 = `http://localhost:8082/mnp/task/${data.taskId}`;
    let body = `{"taskDetails": "${data.taskDetails}","taskAction": "${data.action}","reason": "approving"}`;
    //        var body='{"taskDetails": "CustomerConfirmation","taskAction": "PORTOUT_APPROVED","reason": "approving"}';
    console.log('In service updateTasks->' + `${body}`);
    //        return this.httpClient.post()
    try {
      var temp = this.httpClient.put<any>(`${API3}`, `${body}`, {

        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('admin:password'),
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        })
      }).subscribe(resps => {
        console.log('response is ' + resps.taskId);
      });
    } catch (ex) {
      console.log('error is->>' + ex);
    }


    return null;
  }

  getCustomerDetails(id) {
    let url = `http://localhost:8082/mnp/customer/${id}`;
    console.log('in service '+url);
    return this.httpClient.get(url,httpOptions);

  }
}
