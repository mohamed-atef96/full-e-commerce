import { IOrder } from './../../../../../../libs/orders/src/lib/interfaces/order.interface';
import { OrdersService } from './../../../../../../libs/orders/src/lib/sevices/orders.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
    status: {}[];
    selectedstatus: { name: string } = { name: '' };
    orders: IOrder[] = [];
    constructor(private ordersService: OrdersService, private router: Router) {
        this.status = [
            {
                name: 'All Status',
            },
            {
                name: 'Pending',
            },
            {
                name: 'Delivered',
            },
            {
                name: 'canceled',
            },
        ];
    }

    ngOnInit(): void {
        this.getOrders();
    }
    showDetails(id: string) {
        this.router.navigateByUrl(`/orders/${id}`);
    }

    dropdownSubmit() {
        if (this.selectedstatus.name == 'All Status') {
            this.getOrders();
        }
        this.ordersService.getOrderStatus(this.selectedstatus.name).subscribe(
            (data) => (this.orders = data),
            (err) => console.log(err)
        );
    }
    getOrders() {
        this.ordersService.getOrders().subscribe(
            (data) => {
                this.orders = data;
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
