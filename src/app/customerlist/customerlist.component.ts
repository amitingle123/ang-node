import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
    
dataSource;
    
tableColumns  :  string[] = ['customerId', 'firstName','lastName','dateOfBirth','custBalance','contraStartDate','custStatus'];
 constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      console.log('in service call');
    //  this.apiService.getCustomers().subscribe((data)=>{

      this.apiService.getCustomerList().subscribe((data)=>{
             
      this.dataSource = data;
            
  });
//      this.apiService.getCustomers.arguments((data)=>{
//        console.log('jjjjjjj'+data) ;
//     this.articles = data['articles'];
//  });
  }

}
