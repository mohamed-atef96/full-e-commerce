import { Router } from '@angular/router';
import { CategoriesService, ICategorey, defaultCategory } from '@apps/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-aside',
  templateUrl: './categories-aside.component.html',
  styleUrls: ['./categories-aside.component.scss']
})
export class CategoriesAsideComponent implements OnInit {
  categories:ICategorey []= [defaultCategory]
  selectedValue :string[] =[];
  constructor(private categoriesService:CategoriesService , private router:Router) { }

  ngOnInit(): void {
    this.getCategories()
  }
  getCategories(){
    this.categoriesService.fetchCategories().subscribe(
      data => this.categories = data
    )
  }
  toggleVisibility(event:{checked:string[]}){
    this.selectedValue = event.checked
    if(event.checked.length){
    this.router.navigateByUrl(`/products?categories=${this.selectedValue.join(',')}`)
  }else{
    this.router.navigateByUrl(`/products`)
  }
  }

}
