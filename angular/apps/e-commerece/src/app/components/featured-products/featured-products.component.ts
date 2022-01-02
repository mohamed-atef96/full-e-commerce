import { defaultProduct } from './../../../../../../libs/products/src/lib/interfaces/products.interface';
import { Component, OnInit } from '@angular/core';
import { IProduct, ProductsService } from '@apps/products';

@Component({
    selector: 'apps-featured-products',
    templateUrl: './featured-products.component.html',
    styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
    featuredProducts: IProduct[] = [defaultProduct];
    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.productsService.getFeaturedProducts().subscribe(
            (data) => {this.featuredProducts = data ; console.log(data)},
            (err) => console.log(err)
        );
    }
}
