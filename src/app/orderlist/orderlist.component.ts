import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceError } from '../apiservice.error';
declare const myTest: any;

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})

export class OrderlistComponent implements OnInit{
  
firstname;
tableColumns  :  string[] = ['orderId', 'firstName','lastName','msisdn','extPortRequestId','orderStatus','statusReason','createdOn','updatedOn'];

 changeName() {
  console.log("sffsdfsdf");
}

dataSource;
errorMessage:string;

constructor(private apiService: ApiService) { }
 
  ngOnInit(): void {
    console.log('in service call');
    this.apiService.getOrderList().subscribe(
      (data) => { this.dataSource = data },
      (err: ServiceError) => {
        this.errorMessage = err.friendlyMessage
        console.log(err.errorString)
      }
    );
  }
}
