import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

// ui imports
import { CheckboxModule } from 'primeng/checkbox';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { LogoutGuard } from './guards/logout-guard';

const ui = [CheckboxModule, MessagesModule, MessageModule];
export const usersRoutes: Route[] = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LogoutGuard],
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(usersRoutes),
        ReactiveFormsModule,
        ...ui,
    ],
    declarations: [LoginComponent],
})
export class UsersModule {}
