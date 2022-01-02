import {
    CategoriesService,
    ICategorey,
    IProduct,
    ProductsService,
} from '@apps/products';
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'admin-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    items: MenuItem[];
    categories: ICategorey[] = [{ name: 'All categories', icon: '' }];
    selectedCat: ICategorey = { name: 'All categories', icon: '' };
    productId: string = '';
    products: IProduct[] = [];
    constructor(
        private CategoriesService: CategoriesService,
        private productService: ProductsService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private router: Router
    ) {
        this.items = [
            { label: 'Info', icon: 'pi pi-fw pi-info-circle' },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                command: () => {
                    router.navigateByUrl('products/update/' + this.productId);
                },
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash',
                command: () => {
                    this.confirmationService.confirm({
                        message:
                            'Are you sure that you want to Delete This Product?',
                        accept: () => {
                            this.deleteProduct(this.productId);
                        },
                    });
                },
            },
        ];
    }

    ngOnInit(): void {
        this.CategoriesService.fetchCategories().subscribe(
            (data) => {
                this.categories.push(...data);
            },
            (err) => console.log(err)
        );
        this.getProduct();
    }

    dropdownSubmit() {
        if (this.selectedCat.name == 'All categories') {
            this.getProduct();
        }
        this.productService.getCatProducts(this.selectedCat._id!).subscribe(
            (data) => (this.products = data),
            (err) => console.log(err)
        );
    }

    deleteProduct(id: string) {
        this.productService.deleteProduct(id).subscribe(
            (data) => {
                console.log('deleted successfully');
                this.getProduct();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Delete',
                    detail: 'product Deleted Successfully',
                });
            },
            (err) => {
                console.log(err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Cannot Delete Product',
                });
            }
        );
    }

    getProduct() {
        this.productService.getProducts().subscribe(
            (data) => (this.products = data),
            (err) => console.log(err)
        );
    }
    getProductId(id: string) {
        this.productId = id;
    }
}
