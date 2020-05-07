import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ServiceError } from '../apiservice.error';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  dataSource;
  errorMessage: string;

  tableColumns: string[] = ['customerId', 'firstName', 'lastName', 'dateOfBirth', 'custBalance', 'contraStartDate', 'custStatus'];
  constructor(private apiService: ApiService,
              private route : ActivatedRoute) { }


  ngOnInit(): void {

    let customerList : Observable<Object| ServiceError> = this.route.snapshot.data['customerlist'];

    if(customerList instanceof ServiceError){
      console.log('inside error');
      this.errorMessage = customerList.friendlyMessage
      console.log(customerList.errorString)
    } else {
      this.dataSource= customerList;
    } 
  }
}
