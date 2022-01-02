import { TokenInterceptor } from './../../../../libs/users/src/lib/services/token.interceptor';
import { UsersModule } from './../../../../libs/users/src/lib/users.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AsideComponent } from './aside/aside.component';
import { ShellComponent } from './shell/shell.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/product-list/products.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';

//prime components
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailsComponent } from './pages/orders/oreder-details/oreder-details.component';
import { UsersComponent } from './pages/users/users.component';
import { AppRoutingModule } from './app-routing.module';


const ui = [
    CardModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    DropdownModule,
    MenuModule,
    InputSwitchModule,
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AsideComponent,
        ShellComponent,
        CategoriesComponent,
        ProductsComponent,
        ProductFormComponent,
        OrdersComponent,
        OrderDetailsComponent,
        UsersComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ...ui,
        UsersModule,
    ],
    providers: [
        ConfirmationService,
        MessageService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
