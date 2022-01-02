import { ActivatedRoute } from '@angular/router';
import { IProduct, ProductsService, defaultProduct } from '@apps/products';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-view',
    templateUrl: './product-view.component.html',
    styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
    images: string[] = [];
    product:IProduct = defaultProduct
    item:{averageRate :number} ={averageRate:3}
    constructor(private productsService:ProductsService ,private activatedRoute:ActivatedRoute) {}

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(
        params=> this.getProduct(params.id),
        err => console.log(err)
      )
        this.images = [
            '../../../assets/images/slide-1.jpg',
            '../../../assets/images/slide-2.jpg',
            '../../../assets/images/slide-3.jpg',
        ];
    }

    getProduct(id:string){
      this.productsService.getProduct(id).subscribe(
        data => this.product = data,
        err => console.log(err)
      )

    }
}
