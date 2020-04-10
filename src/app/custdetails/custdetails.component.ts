import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-custdetails',
  templateUrl: './custdetails.component.html',
  styles: []
})
export class CustdetailsComponent implements OnInit {

  datasource;
  constructor(private route: ActivatedRoute, private router : Router,private apiService: ApiService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.apiService.getCustomerDetails(`${id}`).subscribe((data)=>{
    this.datasource = data;
            
  });

  }

  onBack():void {
    console.log('in back');
    this.router.navigate(['/orderlist']);
  }

}
