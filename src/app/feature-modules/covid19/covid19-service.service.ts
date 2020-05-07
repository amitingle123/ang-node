import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, Observable } from 'rxjs';
import { tap, catchError, map, mapTo } from 'rxjs/operators';
import { State, District, Deltas } from './patients/covid19.data';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class Covid19Service {
  private STATE_DIST_URL_V1 = "https://api.covid19india.org/state_district_wise.json";
  private STATE_DIST_URL_V2 = 'https://api.covid19india.org/v2/state_district_wise.json';

  constructor(private httpClient: HttpClient) { }

  districtSubject$ = new Subject<District>();
  districtAction$ = this.districtSubject$.asObservable();



  statelist;
  states: State[] = [];
  cityList: District[] = [];
  cityListSubject$ = new Subject<District[]>();
  cityListAction$ = this.cityListSubject$.asObservable();

  getCityListObservable(): Observable<District[]> {
    console.log('in-getCityListObservable--');
    return this.cityListAction$;
  }

  setCityListObservable(stateCode: string): void {
    console.log('amigetCityListr->' + stateCode);
    this.covidData$.subscribe(data => {

      this.cityListSubject$.next(this.getAllCityList(data, stateCode))

    }
    )

  }

  getAllCityList(data, stateCode: string): District[] {
    let tempList: District[] = [];
    data.forEach(element => {
      console.log('codie is' + element);
      if (stateCode === element.statecode) {

        let temp: District[] = element.districtData;
        temp.forEach(element => {
          // console.log('district is ' + element.district)
          let del: Deltas = {
            confirmed: 0,
            deceased: 0,
            recovered: 0
          }
          let dist: District = {
            district: element.district,
            notes: element.notes,
            active: element.active,
            confirmed: element.confirmed,
            deceased: element.deceased,
            recovered: element.recovered,
            delta: del
          }
          tempList.push(dist);

          // this.cityListSubject$.next(tempList)
        });
      }
    })
    return tempList;
  }

  sendDistrict(district: District) {
    console.log('inside sendDistrict' + district.district);
    this.districtSubject$.next(district);
  }

  getDistrict(): Observable<District> {
    return this.districtAction$;
  }

  covidData$ = this.httpClient.get(this.STATE_DIST_URL_V2)
    .pipe(
      tap(items => console.log('data1 :', JSON.stringify(items))),
      catchError(err => this.handleError(err)),

    );

  myTest = this.covidData$.pipe(
    mapTo(val => console.log('mytest data' + val))

  )

  getStateList(): State[] {
    this.covidData$.subscribe(data => {
      this.getState(data)
    }
    )
    return this.states;
  }

  getState(data): void {
    data.forEach(element => {
      // console.log('codie is'+element.code);
      let st = {
        code: element.statecode,
        name: element.state
      }
      this.states.push(st);
    })

  }

  getCityList(data, stateCode): District[] {
    data.forEach(element => {
      if (stateCode === element.statecode) {
        let temp: District[] = element.districtData;
        temp.forEach(element => {
          let del: Deltas = {
            confirmed: 0,
            deceased: 0,
            recovered: 0
          }
          let dist: District = {
            district: element.district,
            notes: element.notes,
            active: element.active,
            confirmed: element.confirmed,
            deceased: element.deceased,
            recovered: element.recovered,
            delta: del
          }
          this.cityList.push(dist);
        });
      }
    })
    return this.cityList;
    console.log('citilist sizie ' + this.cityList.length);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred : ${err.error.message}`;
    } else {
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(errorMessage);

  }

}
