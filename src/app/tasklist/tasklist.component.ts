import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalTaskComponent } from '../modal-task/modal-task.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
md;
dataSource;
tableColumns  :  string[] = ['taskId', 'taskDetails','customer','msisdn','taskStatus','contraStartDate','operations'];
constructor(public apiService: ApiService,public dialog: MatDialog) { }

 ngOnInit(): void {
      console.log('in service call');
     this.apiService.getTasklists().subscribe((data)=>{
              
      this.dataSource = data;
           
  });
}

editCustomer(id) {
    const dialogRef = this.dialog.open(ModalTaskComponent, {
       data: id
    });
    
//   alert('hi');
//    if(`${id.taskStatus}`!== 'COMPLETED'){
//       console.log('TASK is completed');
//        
//        const dialogRef = this.dialog.open(ModalTaskComponent, {
//       data: id
//    });
//       }else {
//           //alert(`Task#${id.taskId} is already completed`);
//           const dialogRef = this.dialog.open(ModalTaskComponent, {
//       data: id
//    });
//       }
    
    
    
}

}
