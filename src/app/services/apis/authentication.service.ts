// Angular Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from '../../../../node_modules/jwt-decode';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { StorageService} from '../static/storage.service';
import { environment } from '../../../environments/environment';

// Services
import {UtilityService} from '../static/utility.service';

// Third Party Imports
import { Intercom } from 'ng-intercom';

@Injectable()
export class AuthenticationService {
    public baseUrl: string = environment.endpoint;
    public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private http: HttpClient,
        private storageService: StorageService,
        private router: Router,
        public intercom: Intercom
    ) { }

    Login(email: string, password: string): Observable<any> {
        const account = { username: email, password: password };
        const url: string = this.baseUrl + '/api/auth/Login';
        return this.http.post(url, account).pipe(
            map(UtilityService.extractData)
        );
    }

    ForgotPassword(email: string) {
        const emailObject = { Email: email };
        const url: string = this.baseUrl + '/api/auth/ForgotPassword';
        return this.http.post(url, emailObject).pipe(
            map(UtilityService.extractData)
        );
    }

    ResetPassword(email: string, password: string, confirmPassword: string, token: string) {
        const accountObject = { email: email, password: password, confirmpassword: confirmPassword, code: token };
        const url: string = this.baseUrl + '/api/auth/ChangePassword/Token';
        return this.http.post(url, accountObject).pipe(
            map(UtilityService.extractData)
        );
    }

    ResendConfirmationEmail(emailAddress: string) {
        let emailObject = {
            email: emailAddress
        }
        const url: string = this.baseUrl + '/api/auth/ResendConfirmation';
        return this.http.post(url, emailObject).pipe(
            map(UtilityService.extractData)
        );
    }

    ChangePassword(email: string, currentPassword: string, newPassword: string) {
        const accountObject = { email: email, CurrentPassword: currentPassword, NewPassword: newPassword };
        const url: string = this.baseUrl + '/api/auth/ChangePassword';
        return this.http.post(url, accountObject).pipe(
            map(UtilityService.extractData)
        );
    }

    Logout() {
        this.intercom.shutdown(); // Disconnecting Intercom chat
        this.RemoveToken();
        this.isLoggedIn.next(false);
        this.router.navigate(['/login']);
    }

    SetToken(token: string) {
        localStorage.setItem('accessToken', token);
    }

    GetToken() {
        return localStorage.getItem('accessToken');
    }

    RemoveToken() {
        localStorage.removeItem('accessToken');
    }

    IsTokenValid(token: string) {
        const decoded = jwt_decode(token);
        const date = new Date(0);

        if (decoded.exp === undefined) {
            return false;
        }

        date.setUTCSeconds(decoded.exp);

        if (date.valueOf() > new Date().valueOf()) {
            return true;
        }

        return false;
    }

    IsLoggedIn(token?: string) {
        if (!token) {
            token = this.GetToken();
            if (!token) {
                return false;
            }
        }

        if (this.IsTokenValid(token)) {
            // Checking if token has already been set
            if (token !== this.storageService.accountToken.getValue()) {
                this.storageService.accountToken.next(token);
            }

            return true;
        }

        return false;
    }
}