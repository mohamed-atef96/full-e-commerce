import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//components
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TopRatedProductdComponent } from './components/top-rated-productd/top-rated-productd.component';
import { CategoriesCardComponent } from './components/categories-card/categories-card.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewarrivalComponent } from './components/newarrival/newarrival.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './pages/products/products.component';
import { CategoriesAsideComponent } from './components/categories-aside/categories-aside.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductViewComponent } from './pages/product-view/product-view.component';

//ui imports
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {CarouselModule} from 'primeng/carousel';
import {MenubarModule} from 'primeng/menubar';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';
import {GalleriaModule} from 'primeng/galleria';


const ui = [CarouselModule , InputTextModule , MenubarModule , CheckboxModule ,PaginatorModule , DataViewModule , GalleriaModule]

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductsComponent },
  { path: 'product/:id', component: ProductViewComponent },
];

@NgModule({
  declarations: [AppComponent, HomepageComponent, ProductsListComponent, ShellComponent, HeaderComponent, CarouselComponent, NavbarComponent, ProductItemComponent, FeaturedProductsComponent, TopRatedProductdComponent, CategoriesCardComponent, BannerComponent, NewarrivalComponent, ServiceSectionComponent, FooterComponent, ProductsComponent, CategoriesAsideComponent, ProductViewComponent],
  imports: [    BrowserModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(routes) ,...ui ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
