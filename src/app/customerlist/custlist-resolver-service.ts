import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ServiceError } from '../apiservice.error';
import { ApiService } from '../api.service';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn:'root'
})

export class  CustomerListResolver implements Resolve<Object| ServiceError> {
    constructor(private apiService : ApiService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Object | ServiceError> {

        return this.apiService.getCustomerList().
        pipe(
            catchError(err => of(err))
        );
    }

}