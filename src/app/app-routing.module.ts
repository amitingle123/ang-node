import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HomeComponent } from './home/home.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
  



const routes: Routes = [
    { path: '', redirectTo: 'index.html', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path:'customers', component: CustomerlistComponent},
    { path:'tasklists', component: TasklistComponent},
    { path:'editmodal', component: ModalTaskComponent},
    { path: 'orderlist', component: OrderlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
