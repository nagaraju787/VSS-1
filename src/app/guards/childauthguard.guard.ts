import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChildAuthGuardGuard implements CanActivateChild {
  constructor(private router: Router) {} 
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!sessionStorage.getItem('userName')) { 
      this.router.navigate(['login']);
      return false;
       }else{
          return true;
        }
    }
  
}
