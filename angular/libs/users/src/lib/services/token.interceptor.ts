import { LocalStorageService } from '@apps/users';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private localStorageService: LocalStorageService) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        const token = this.localStorageService.token;
        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', token),
            });
        }
        return next.handle(request);
    }
}
