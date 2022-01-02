import { IProduct, ProductsService, defaultProduct } from '@apps/products';
import { Component, OnInit } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    result: IProduct[] = [defaultProduct];
    textChanged: Subject<string> = new Subject<string>();
    constructor(private productsService: ProductsService) {}

    ngOnInit(): void {
        this.textChanged.pipe(debounceTime(300)).subscribe(
          searchText =>  this.getProduct(searchText),
          err => console.log(err)
        );
    }
    search(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.textChanged.next(value);
    }

    getProduct(query: string) : any{
      if(!query){
        return this.result = [defaultProduct]
      }
        this.productsService.searchProducts(query).subscribe(
            (data) => (this.result = data),
            (err) => console.log(err)
        );
    }
}
