import { LocalStorageService } from '@apps/users';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../interfaces/order.interface';

@Injectable({
    providedIn: 'root',
})
export class OrdersService {
    orderApi: string = environment.apiUrl + '/order';
    constructor(
        private http: HttpClient,
        private localStorageService: LocalStorageService
    ) {}

    getOrders(): Observable<IOrder[]> {
        return this.http.get<IOrder[]>(this.orderApi);
    }
    getOrder(id: string): Observable<IOrder> {
        return this.http.get<IOrder>(`${this.orderApi}/${id}`);
    }
    updateStatus(id: string, status: { status: string }) {
        return this.http.put(`${this.orderApi}/updateStatus/${id}`, status);
    }
    getOrderStatus(status: string): Observable<IOrder[]> {
        return this.http.get<IOrder[]>(
            `${this.orderApi}/get/status?status=${status}`
        );
    }
    getOrdersCount(): Observable<{ ordersCount: string }> {
        return this.http.get<{ ordersCount: string }>(
            `${this.orderApi}/get/count`
        );
    }
    getTotalSales(): Observable<{ totalSales: string }> {
        return this.http.get<{ totalSales: string }>(
            `${this.orderApi}/get/totalsales`
        );
    }
}
