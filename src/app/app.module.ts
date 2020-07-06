import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './material.module';
import { TasklistComponent } from './tasklist/tasklist.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';
import { FormsModule }   from '@angular/forms';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { RegisterComponent } from './register/register.component';
import { CustdetailsComponent } from './custdetails/custdetails.component';
import { Covid19Module } from './feature-modules/covid19/covid19.module';
import { RegTemplateComponent } from './register/regTemplate.component';
import { RegReactComponent } from './register/regReact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective }from './shared/app-highlight.directive';
import { AddHeaderInterceptor } from './shared/add-header.interceptor';
import { HeroParentComponent } from './shared/hero-parent.component';
import { HeroChildComponent } from './shared/hero-child.component';
import { HelloComponent } from './shared/hello-component';
import { HelloParentComponent } from './shared/helloparent-component';
import { CacheInterceptor } from './shared/cache.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CustomerlistComponent,
    HomeComponent,
    TasklistComponent,
    ModalTaskComponent,
    OrderlistComponent,
    RegisterComponent,
    RegTemplateComponent,
    RegReactComponent,
    CustdetailsComponent,
    HighlightDirective,
    HeroParentComponent,
    HeroChildComponent,
    HelloParentComponent,
    HelloComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    Covid19Module
  ],
  providers: [
    // { provide : HTTP_INTERCEPTORS,useClass : AddHeaderInterceptor, multi: true },
    // { provide : HTTP_INTERCEPTORS,useClass: CacheInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

