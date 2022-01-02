import { defaultCategory, ICategorey } from '@apps/products';
import { CategoriesService } from './../../../../../../libs/products/src/lib/services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-cards',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent implements OnInit {
  categories:ICategorey[] =[defaultCategory]
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.fetchCategories().subscribe(
      data => this.categories = data,
      err => console.log(err)
    )
  }

}
