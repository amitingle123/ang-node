import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustDetailsGuard implements CanActivate {

  constructor(private router : Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = next.url[1].path;
      if(!id.startsWith('CUST')){
        alert('Invalid customer id');
        this.router.navigate(['/orderlist']);
        return false;

      } else {
        return true;
      }
  }
  
}
