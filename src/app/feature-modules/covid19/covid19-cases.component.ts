import { Component, OnInit, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { Covid19Service } from './covid19-service.service';
import { District } from './patients/covid19.data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-covid19-cases',
  templateUrl: './covid19-cases.component.html',
  styleUrls: ['./covid19-cases.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Covid19CasesComponent implements OnInit,OnChanges {

  constructor(private covidService : Covid19Service) {
    console.log('--------in constructor--');
   }

  city$: Observable<District>;
  testMe: string = 'ingle';

  ngOnInit(): void {
    console.log('--------in ngOnInit--');
    this.city$ = this.covidService.getDistrict()
      .pipe(map((d : District) => d
        ));
   
    // this.covidService.getDistrict().subscribe(dist=> {

    //   console.log('------qq--in dist---'+dist.district);
    //   this.city = dist;
    //   this.testMe= 'amit'
    // });

  }
  
  ngOnChanges(changes :SimpleChanges) :void {
    console.log('--------in ngOnChanges---');
  }

 
}
