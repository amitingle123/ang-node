import { Component, OnInit, ChangeDetectionStrategy, ViewChild, OnChanges } from '@angular/core';
import { Covid19Service } from '../covid19-service.service';
import { map, tap } from 'rxjs/operators';
import {State, District, Deltas } from './covid19.data';
import { element } from 'protractor';
import { NgForm } from '@angular/forms';
import { combineLatest, Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PatientsComponent implements OnInit,OnChanges {
@ViewChild(NgForm, {static: false}) covidForm: NgForm;

covidSubject = new Subject<string>();
covidAction$ = this.covidSubject.asObservable;

constructor(private covidService : Covid19Service) { }
 

dataSource;
statelist :State [];
states: State[] = [];
cityList$: Observable<District[]>;
selectedCity;
selectedValue;
  ngOnInit(): void {
    this.states = this.covidService.getStateList();
   
  }
  
  ngOnChanges() :void {
    this.cityList$= this.covidService.getCityListObservable().pipe(map((d : District[]) => d
    ));
  }
  getCountState(data: Observable<District[]>): void{
    let count:number =0;
    let total = data.pipe(
      map(dt => console.log('hello---'+dt))
    ) 
      
    
  }

  onStateSelect(stateCode) {
    this.covidService.setCityListObservable(stateCode);
    this.cityList$= this.covidService.getCityListObservable().pipe(map((d : District[]) => d
    ));
    this.getCountState(this.cityList$);
    // this.cityList = [];
    // this.selectedValue=undefined;
    // let filterValue = '';
    // if (stateCode) {
    //   this.covidService.covidData$.subscribe(
    //     data => {
    //       console.log('amit here' + data)
    //       this.cityList= [];
    //       this.cityList = this.covidService.getCityList(data, stateCode)
    //     }
    //   );
    // }
  }

  onDistrictSelect(district:District){
    console.log('in onDistrictSelect##################'+district.district);
    if(district) {
      this.covidService.sendDistrict(district);
    }
    
  }

 
 

  
  

}
