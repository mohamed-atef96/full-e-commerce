import { Component, OnInit } from '@angular/core';
import { defaultProduct, IProduct, ProductsService } from '@apps/products';

@Component({
  selector: 'app-new-arrival',
  templateUrl: './newarrival.component.html',
  styleUrls: ['./newarrival.component.scss']
})
export class NewarrivalComponent implements OnInit {

  newProducts: IProduct[] = [defaultProduct];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
      this.productsService.getNewProducts().subscribe(
          (data) => {this.newProducts = data ; console.log(data)},
          (err) => console.log(err)
      );
  }
}
