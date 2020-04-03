import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
declare const myTest: any;

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})

export class OrderlistComponent implements OnInit {
  dataSource;
    firstname;
tableColumns  :  string[] = ['orderId', 'firstName','lastName','msisdn','extPortRequestId','orderStatus','statusReason','createdOn','updatedOn'];

 changeName() {
  console.log("sffsdfsdf");
}

constructor(private apiService: ApiService) { }

  ngOnInit(): void {
      console.log('in service call');
      
    this.apiService.getOrderlists().subscribe((data)=>{
          
      this.dataSource = data;
      
            
    });
  }
}
