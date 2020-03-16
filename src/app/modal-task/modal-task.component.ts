import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Inject} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../api.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})
export class ModalTaskComponent  implements OnInit {

    public ownerForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<ModalTaskComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public apiService: ApiService) {console.log('@@'+data.taskId); }

ngOnInit() {
//    this.ownerForm = new FormGroup({
//      taskdetails: new FormControl('', [Validators.required, Validators.maxLength(60)]),
//      action: new FormControl('', [Validators.required, Validators.maxLength(100)])
//    });
  }
    
    formControl = new FormControl('', [
    Validators.required
       
    // Validators.email,
        
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit(obj) {
    // emppty stuff
      alert('in submit');
      console.log('in submit--'+obj.form);
  }

  onNoClick(): void {
      console.log('in cancel--');
   this.dialogRef.close();
  }

  stopEdit(): void {
//    this.apiService.updateIssue(this.data);
      console.log('in save--'+this.data.action);
      this.apiService.updateTasks(this.data);
      this.dialogRef.afterClosed().subscribe(()=>this.ngOnInit());
  }

}
