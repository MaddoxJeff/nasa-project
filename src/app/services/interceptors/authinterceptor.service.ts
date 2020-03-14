// Angular Imports
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = localStorage.getItem("accessToken");
        if (!request.headers.get('Content-Type')) { // Checking if request has Content Type set
            request.headers.set("Content-Type", "application/json");
        }

        if (accessToken) {
            const cloned = request.clone({
                headers: request.headers.set("Authorization", "Bearer " + accessToken)
            });
            return next.handle(cloned);
        } else {
            return next.handle(request);
        }
    }
}