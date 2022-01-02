import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { LoginGuard } from 'libs/users/src/lib/guards/login-guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/product-list/products.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailsComponent } from './pages/orders/oreder-details/oreder-details.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {
      path: '',
      component: ShellComponent,
      canActivate: [LoginGuard],
      children: [
          {
              path: '',
              component: DashboardComponent,
          },
          {
              path: 'dashboard',
              component: DashboardComponent,
          },
          {
              path: 'categories',
              component: CategoriesComponent,
          },
          {
              path: 'products',
              component: ProductsComponent,
          },
          {
              path: 'products/create',
              component: ProductFormComponent,
          },
          {
              path: 'products/update/:id',
              component: ProductFormComponent,
          },
          {
              path: 'orders',
              component: OrdersComponent,
          },
          {
              path: 'orders/:id',
              component: OrderDetailsComponent,
          },
          {
              path: 'users',
              component: UsersComponent,
          },
      ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
