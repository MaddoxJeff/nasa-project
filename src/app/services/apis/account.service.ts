// Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { environment } from '../../../environments/environment';

//Models
import { AccountSmall } from 'src/app/models/account.model';

// Services
import { UtilityService } from '../static/utility.service';

@Injectable()

export class AccountService {
    public baseUrl: string = environment.endpoint;

    constructor(
        private http: HttpClient
    ) { }

    GetAllAccounts(): Observable<AccountSmall[]> {
        const url: string = this.baseUrl + 'api/Account/GetAll';
        return this.http.get(url).pipe(
            map(UtilityService.extractData)
        );
    }

    GetLoggedInAccount(): Observable<AccountSmall> {
        const url: string = this.baseUrl + 'api/Account/GetLoggedIn';
        return this.http.get(url).pipe(
            map(UtilityService.extractData)
        );
    }
}