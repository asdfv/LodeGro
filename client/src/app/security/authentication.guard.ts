import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {constant} from "../app.constatnts";

@Injectable()
export class AuthenticationGuard implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate([constant.LOGIN_URL]);
        return false;
    }

}