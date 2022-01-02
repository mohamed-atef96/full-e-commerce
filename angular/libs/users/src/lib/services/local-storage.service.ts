/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor() {}

    setToken(jwtToken: string) {
        localStorage.setItem('token', `Bearer ${jwtToken}`);
    }
    get token(): string {
        return localStorage.getItem('token') || '';
    }
    removeRoken() {
        localStorage.removeItem('token');
    }
}
