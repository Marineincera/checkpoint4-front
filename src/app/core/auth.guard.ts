import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // verifier si y a un user
    if (this.userService.connectedUser) {
      return true;
    }

    return this.userService.isLogged().pipe(catchError((error) => {
      this.router.navigateByUrl('/signin');
      return throwError(error);
    }));
  }
}
