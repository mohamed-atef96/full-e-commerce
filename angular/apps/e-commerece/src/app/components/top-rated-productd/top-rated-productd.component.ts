import { Component, OnInit } from '@angular/core';
import { defaultProduct, IProduct, ProductsService } from '@apps/products';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated-productd.component.html',
  styleUrls: ['./top-rated-productd.component.scss']
})
export class TopRatedProductdComponent implements OnInit {
  topProducts: IProduct[] = [defaultProduct];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
      this.productsService.getTopProducts().subscribe(
          (data) => {this.topProducts = data },
          (err) => console.log(err)
      );
  }
}
