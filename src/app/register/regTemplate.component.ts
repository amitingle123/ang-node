import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
import { Customer } from './customer';
import { Register } from './register';

@Component({
  selector: 'app-regtemplate',
  templateUrl: './regTemplate.component.html',
  
})
export class RegTemplateComponent implements OnInit {
    
 customer = new Register();
 today = new Date();
  constructor(private apiService: ApiService) { 
    this.today.setDate(this.today.getDate());
  }

  ngOnInit(): void {
   
  }

  save(customerForm: NgForm) {
    console.log(customerForm.form);
    console.log('saved'+ JSON.stringify(customerForm.value));
  }
 

}

