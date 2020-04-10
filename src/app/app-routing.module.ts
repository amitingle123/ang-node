import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HomeComponent } from './home/home.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RegisterComponent } from './register/register.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { CustDetailsGuard } from './custdetails/cust-details.guard';
  



const routes: Routes = [
    { path: '', redirectTo: 'index.html', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path:'customers', component: CustomerlistComponent},
    { path:'tasklists', component: TasklistComponent},
    { path:'editmodal', component: ModalTaskComponent},
    { path: 'orderlist', component: OrderlistComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'customerdetails/:id', canActivate: [CustDetailsGuard] , component :CustdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
