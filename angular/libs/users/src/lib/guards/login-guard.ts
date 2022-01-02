import { LocalStorageService } from '../services/local-storage.service';
/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    constructor(
        private LocalStorageService: LocalStorageService,
        private router: Router
    ) {}
    canActivate(): boolean {
        const token = this.LocalStorageService.token;
        if (token) {
            const userData = JSON.parse(atob(token.split('.')[1]));
            if (userData.isAdmin) {
                return true;
            }
        }
        this.router.navigateByUrl('/login');
        return false;
    }
}
