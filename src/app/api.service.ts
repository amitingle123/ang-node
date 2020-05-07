import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ServiceError } from './apiservice.error';
import { Customer } from './register/customer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa('admin:nopassword'),
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
  private CUSTOMER_LIST = 'http://localhost:8082/backoffice/getcustomers';
  private TASKS_LIST = 'http://localhost:8082/backoffice/gettasks';
  private ORDER_LIST = 'http://localhost:8082/backoffice/getorders';
  private CREATE_CUSTOMER = 'http://localhost:8082/mnp/customer/create';

  getOrderList(): Observable<Object> {
    return this.httpClient.get(this.ORDER_LIST).pipe(
      tap(data => console.log('ALL ORDERS: ' + JSON.stringify(data))),
      catchError(this.handleError)

    );
  }

  getCustomerList(): Observable<Object> {
    return this.httpClient.get(this.CUSTOMER_LIST).pipe(
      tap(data => console.log('ALL: ' + JSON.stringify(data))),
      catchError(this.handleError)

    );
  }

  getTasklists(): Observable<Object> {
    return this.httpClient.get(this.TASKS_LIST).pipe(
      tap(data => console.log('TASK LIST ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  updateTasks(data): Observable<Object> {
    let API3 = `http://localhost:8082/mnp/task/${data.taskId}`;
    let body = `{"taskDetails": "${data.taskDetails}","taskAction": "${data.action}","reason": "approving"}`;
    //        var body='{"taskDetails": "CustomerConfirmation","taskAction": "PORTOUT_APPROVED","reason": "approving"}';
    console.log('In service updateTasks->' + `${body}`);
    return this.httpClient.put<any>(`${API3}`, `${body}`);
  }

  createCustomer(data: Customer) : Observable<Customer | ServiceError>{
    return this.httpClient.post<Customer>(this.CREATE_CUSTOMER,data).pipe(
      tap((retData : Customer) => console.log("CUSTOMER CREATED :"+retData)),
      catchError(this.handleError)
    );
  }

  getCustomerDetails(id) {
    let url = `http://localhost:8082/mnp/customer/${id}`;
    console.log('in service ' + url);
    return this.httpClient.get(url).pipe(
      tap(data => console.log('CUSTOMER DETAILS : ',JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) :Observable<ServiceError> {
    let srcErr = new ServiceError();
    srcErr.errorCode = '400';
    if (err.error instanceof ErrorEvent) {
      srcErr.errorString = `An error ocurred : ${err.error.message}`;
    } else {
      srcErr.errorString = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    srcErr.friendlyMessage = 'An error ocurred while call calling service';
    return throwError(srcErr);
  }
}
