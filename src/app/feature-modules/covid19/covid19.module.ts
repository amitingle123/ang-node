import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyMaterialModule} from '../../material.module';
import { Covid19RoutingModule } from './covid19-routing.module';
import { Covid19ShellComponent } from './covid19-shell.component';
import { PatientsComponent} from './patients/patients.component';
import { Covid19CasesComponent } from './covid19-cases.component'




@NgModule({
  declarations: [Covid19RoutingModule.components, Covid19ShellComponent,PatientsComponent, Covid19CasesComponent],
  imports: [
    CommonModule,
    Covid19RoutingModule,
    MyMaterialModule
  ]
})
export class Covid19Module { }
