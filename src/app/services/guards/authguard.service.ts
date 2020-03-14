// Angular Imports
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

// Services
import { AuthenticationService } from '../apis/authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        public authService: AuthenticationService,
        public router: Router
    ) { }

    canActivate() {
        if (this.authService.IsLoggedIn()) {
            return true;
        }

        this.router.navigate(['/login']);
    }
}