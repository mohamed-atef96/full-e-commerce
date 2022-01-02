import { Router } from '@angular/router';
import { IProduct ,defaultProduct} from '@apps/products';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() item:IProduct=defaultProduct
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  viewProduct(id:string){
    this.router.navigate([`/product/${id}`])
  }



}
