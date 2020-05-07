import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';
import { Register } from './register';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS, PICK_FORMATS } from './format-datepicker';
import { formatDate } from '@angular/common';
import { ServiceError } from '../apiservice.error';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS},
    {provide : MAT_DATE_LOCALE, useValue:'en-GB'}
  ]
})
export class RegisterComponent implements OnInit {
  customer = new Customer();
  today = new Date();
  errorMessage:string;

  constructor(private apiService: ApiService, private route : Router ) { 
    this.today.setDate(this.today.getDate());
  }

  ngOnInit() {
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    // customerForm.form.get('contractStDate').setValue(formatDate(customerForm.form.get('contractStDate').value,'dd-MM-yyyy','en_US'));
    console.log('conract date-'+customerForm.form.get('contractStDate').value);
    const date = new Date(customerForm.form.get('contractStDate').value);

    this.apiService.createCustomer(this.formCustomer(customerForm)).subscribe(
      (data) => { 
        console.log('customer created '+JSON.stringify(data))
        this.route.navigate(["/customers"]);
      },
      (err: ServiceError) => {
        this.errorMessage = err.friendlyMessage
        console.log(err.errorString)
      }
    )

    //  console.log('Transfformed date date-'+date);
    //  let d1 = new Date('Fri May 01 2020 00:00:00 GMT+0530 ');
    //  let d2 = new Date('2020-04-30T18:30:00.000Z');

    //  console.log('Transfformed D1 -'+Number(d1));
    //  console.log('Transfformed D2 -'+Number(d2));
    
    console.log('Saved: ' + JSON.stringify(customerForm.value));

  }

  formCustomer(customerForm: NgForm) : Customer {

  let cust = new Customer();
  cust.firstName = customerForm.form.get('firstName').value;
  cust.lastName = customerForm.form.get('lastName').value;
  cust.dateOfBirth = formatDate(customerForm.form.get('dateOfBirth').value,'dd-MM-yyyy','en_US');
  cust.balance = customerForm.form.get('balance').value;
  cust.contractStDate = formatDate(customerForm.form.get('contractStDate').value,'dd-MM-yyyy','en_US');
  cust.custStatus = customerForm.form.get('custStatus').value;

  return cust;
  }


}
