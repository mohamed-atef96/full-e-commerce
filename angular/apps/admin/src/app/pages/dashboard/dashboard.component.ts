import { AuthService } from './../../../../../../libs/users/src/lib/services/auth.service';
import { OrdersService } from './../../../../../../libs/orders/src/lib/sevices/orders.service';
import { productsRoutes } from './../../../../../../libs/products/src/lib/products.module';
import { ProductsService } from './../../../../../../libs/products/src/lib/services/products.service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productsCount:string = '';
  ordersCount:string = '';
  usersCount:string = '';
  totalSales:string = '';
  constructor(private ProductsService:ProductsService , private ordersService:OrdersService , private authService:AuthService) { }

  ngOnInit(): void {
    this.ProductsService.getProductsCount().subscribe(
      data =>{ this.productsCount = data.productCount
      console.log(this.productsCount) ;
    },
    err => console.log(err)
    )
    this.ordersService.getOrdersCount().subscribe(
      data => {this.ordersCount = data.ordersCount },
      err => console.log(err)
    );
    this.authService.getUsersCount().subscribe(
      data => this.usersCount = data.usersCount,
      err => console.log(err)
    )
    this.ordersService.getTotalSales().subscribe(
      data => this.totalSales = data.totalSales,
      err => console.log(err)
    )
  }

}
