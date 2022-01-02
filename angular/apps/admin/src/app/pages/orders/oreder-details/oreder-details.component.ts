import {
    IOrder,
    defaultOrder,
} from './../../../../../../../libs/orders/src/lib/interfaces/order.interface';
import { OrdersService } from './../../../../../../../libs/orders/src/lib/sevices/orders.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '@apps/products';

@Component({
    selector: 'admin-oreder-details',
    templateUrl: './oreder-details.component.html',
    styleUrls: ['./oreder-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
    status: {}[];
    selectedstatus: { name: '' } = { name: '' };
    orderId: string = '';
    orderDetails: IOrder = defaultOrder;
    constructor(
        private route: ActivatedRoute,
        private ordersService: OrdersService
    ) {
        this.status = [
            {
                name: 'Pending',
            },
            {
                name: 'Delivered',
            },
            {
                name: 'Canceled',
            },
        ];
    }

    ngOnInit(): void {
        this.getId();
       this.getOrder(this.orderId)
    }
    getId() {
        this.route.params.subscribe((param) => (this.orderId = param.id));
    }

    updateStatus() {
        console.log(this.selectedstatus.name);
        this.ordersService
            .updateStatus(this.orderId, { status: this.selectedstatus.name })
            .subscribe(
                (data) => this.getOrder(this.orderId),
                (err) => console.log(err)
            );
    }
    getOrder(id:string){
      this.ordersService.getOrder(id).subscribe((data) => {
        this.orderDetails = data;
        console.log(data);
    });
    }
}
