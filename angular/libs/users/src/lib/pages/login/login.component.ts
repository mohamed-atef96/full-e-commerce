import { LocalStorageService } from './../../services/local-storage.service';
import { AuthService } from './../../services/auth.service';
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'users-admin',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    isSubmitted = false;
    loginFailed = false;
    FailedMessage = '';
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private localStorageService: LocalStorageService
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.email, Validators.required]],
            password: ['', Validators.required],
        });
    }
    login() {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        const email = this.loginForm.controls.email.value;
        const password = this.loginForm.controls.password.value;
        this.authService.logIn({ email, password }).subscribe(
            (data) => {
              const userData = JSON.parse(atob(data.token.split('.')[1]));
              if (!userData.isAdmin) {
                this.FailedMessage = "Your Aren't An admin!"
                this.loginFailed = true
                return
              }
                this.localStorageService.setToken(data.token);
                this.router.navigateByUrl('/');
                this.loginFailed = false;
            },

            (err) => {
              this.FailedMessage = "Invalid Email Or Password!"
              this.loginFailed = true}

        );
    }

    ngOnInit(): void {}
}
