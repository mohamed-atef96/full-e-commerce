import { ProductsService } from './../../../../../../../libs/products/src/lib/services/products.service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, ICategorey } from '@apps/products';
import { MessageService } from 'primeng/api';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'admin-product-form',
    templateUrl: './product-form.component.html',
    styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
    imageSrc: string | ArrayBuffer = '';
    isSubmitted = false;
    productForm: FormGroup;
    categories: ICategorey[] = [];
    productId: string = '';
    isEditing = false;
    title: string = 'Create New';
    buttonText: string = 'Create';

    constructor(
        private fb: FormBuilder,
        private CategoriesService: CategoriesService,
        private productsService: ProductsService,
        private messageService: MessageService,
        private location: Location,
        private route: ActivatedRoute
    ) {
        this.productForm = this.fb.group({
            name: ['', Validators.required],
            brand: ['', Validators.required],
            quantity: ['', Validators.required],
            price: ['', Validators.required],
            category: ['', Validators.required],
            isFeatured: ['', Validators.required],
            description: ['', Validators.required],
            images: ['', Validators.required],
        });
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

    create() {
        this.isSubmitted = true;
        if (this.productForm.invalid) {
            return;
        }
        if (this.isEditing) {
            this.productsService
                .editProduct(this.productId, this.createFormData())
                .subscribe(
                    (data) => {
                        console.log(this.productForm.controls.isFeatured.value);
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Update Message',
                            detail: 'product Updated Successfully',
                        });
                    },
                    (err) => {
                        console.log(err);
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Cannot Update Product',
                        });
                    }
                );
        } else {
            this.productsService.createProduct(this.createFormData()).subscribe(
                (data) => {
                  console.log(this.productForm.controls.isFeatured.value)
                    console.log('added successfully');
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Create Message',
                        detail: 'product Created Successfully',
                    });
                },
                (err) => {
                    console.log(err);
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Cannot Create Product',
                    });
                }
            );
        }
    }

    onUpload(event: any) {
        const fileReader = new FileReader();
        const file = event.target.files[0];
        if (file) {
            this.productForm.patchValue({ images: file });
            fileReader.readAsDataURL(event.target.files[0]);
            fileReader.onload = () => {
                this.imageSrc = fileReader.result ? fileReader.result : '';
            };
        }
    }

    goBack() {
        this.location.back();
    }

    getProduct() {
        this.route.params.subscribe((param) => (this.productId = param.id));
        if (this.productId) {
            this.isEditing = true;
            (this.title = 'Update'), (this.buttonText = 'Update');
            this.productsService
                .getProduct(this.productId)
                .subscribe((product) => {
                    this.productForm.controls.name.setValue(product.name);
                    this.productForm.controls.category.setValue(
                        product.category
                    );
                    this.productForm.controls.brand.setValue(product.brand);
                    this.productForm.controls.price.setValue(product.price);
                    this.productForm.controls.quantity.setValue(
                        product.quantity
                    );
                    this.productForm.controls.isFeatured.setValue(
                        product.isFeatured
                    );
                    this.productForm.controls.description.setValue(
                        product.description
                    );
                    this.imageSrc = product.images[0];
                    this.productForm.controls.images.setValidators([]);
                    this.productForm.controls.images.updateValueAndValidity();
                });
        }
    }

    createFormData() {
        const formData = new FormData();
        formData.append('name', this.productForm.controls.name.value);
        formData.append('brand', this.productForm.controls.brand.value);
        formData.append('quantity', this.productForm.controls.quantity.value);
        formData.append('price', this.productForm.controls.price.value);
        formData.append(
            'category',
            this.productForm.controls.category.value._id
        );
        formData.append(
            'isFeatured',
            this.productForm.controls.isFeatured.value
        );
        formData.append(
            'description',
            this.productForm.controls.description.value
        );
        formData.append('images', this.productForm.controls.images.value);
        return formData;
    }
}
