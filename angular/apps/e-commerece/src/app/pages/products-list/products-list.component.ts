import { ActivatedRoute, Router } from '@angular/router';
import { defaultProduct, IProduct, ProductsService } from '@apps/products';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'apps-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit{
  filterdProducts:IProduct[] = [defaultProduct];
  filterBy:string = '';
    constructor(private productServices:ProductsService , private activatedRoute:ActivatedRoute , private router:Router) {}

  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe(
     params =>{
       if(Object.keys(params).length !== 0){
         this.filterBy = params.categories
         this.getFilterd(this.filterBy)
       }else{
      this.getAll();
       }
    }
   )

  }


    getFilterd(query:string){

      this.productServices.getProductsByCat(query).subscribe(
        data =>this.filterdProducts = data,
        err => console.log(err)
      )
    }

    getAll(){
      this.productServices.getProducts().subscribe(
        data => this.filterdProducts = data,
        err => console.log(err)
      )
    }
    navigate(event:{first:number,rows:number}){
      let pageIndex = event.first/event.rows + 1
      this.router.navigateByUrl(`products/${pageIndex}`)
        console.log(pageIndex)
    }
}
