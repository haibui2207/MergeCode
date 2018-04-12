﻿import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PLATFORM_ID } from '@angular/core';
import { AuthService } from '../services/auth.sevice';
import { isPlatformBrowser } from '@angular/common';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class AuthguardGuard implements CanActivate {

    private token: string;


    constructor( private router: Router) {
  
    }
    

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        this.router.navigate(['/login']);
        return false;
        //localStorage.getItem('currentUser');
        //if (this.auth.getTest()) {
        //    return true;
        //}
        //let ahihi = localStorage.getItem('currentUser');
      //  return this.auth.isAuthenticated();
        // console.log(route);
        //if (isPlatformBrowser(this.platformId))//<== means you are client side
        //{
        //    if (localStorage.getItem('currentUser')) {

        //    }
        //}
        //this.router.navigate(['/logout'], { queryParams: { returnUrl: state.url } });
        //return false;

        //return this.auth.isLoggedIn       // {1}
        //    .take(1)                               // {2} 
        //    .map((isLoggedIn: boolean) => {        // {3}
        //        if (!isLoggedIn) {
        //            this.router.navigate(['/login']);  // {4}
        //            return false;
        //        }
        //        return true;
        //    });





        //console.log(this.auth.getUserLoggedIn());

        //let a = this.auth.loggedIn.getValue();
        //console.log(a);

        //if (!this.auth.isUserLoggedIn) {
        //    this.router.navigate(['/login-form']);
        //    return false;
        //} else {
        //    return true;
        //}
    }
   
}
