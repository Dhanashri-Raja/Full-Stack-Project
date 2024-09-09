import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AdminEmployeeGuardService implements CanActivate {
    constructor(public router: Router) {
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/login']);
            return false;
        } else {
            return true;
        }
    }

    isAuthenticated() {
        let isAuth: boolean = false;
        if (typeof localStorage !== 'undefined') {
            isAuth = localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'user' ? true : false;
        }
        return isAuth;
    }
}
