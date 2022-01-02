import { CategoriesService, ICategorey } from '@apps/products';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'admin-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
    categories: ICategorey[] = [];
    display = false;
    isSubmitted = false;
    onEdit = false;
    form: FormGroup;
    dailogeTitle: string = 'Create';
    categoryId: string = '';

    constructor(
        private CategoriesService: CategoriesService,
        private formBulider: FormBuilder,
        private ConfirmationService: ConfirmationService,
        private messageService: MessageService
    ) {
        this.form = this.formBulider.group({
            name: ['', Validators.required],
            icon: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.getCategory();
    }

    submit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }
        if (this.onEdit) {
            this.edit();
        } else {
            this.creat();
        }
        this.display = false;
        this.clearInputs();
        this.isSubmitted = false;
    }

    // create a new category
    creat() {
        const category: ICategorey = {
            name: this.form.controls.name.value,
            icon: this.form.controls.icon.value,
        };
        this.CategoriesService.createCategory(category).subscribe(
            (response) => {
                this.getCategory();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Create Message',
                    detail: 'Category Created Successfully',
                });
            },
            (err) => {
                console.log(err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Category Creating Error',
                });
            }
        );
    }

    // edit a category
    edit() {
        this.isSubmitted = true;
        if (this.form.invalid) {
            return;
        }

        const category: ICategorey = {
            name: this.form.controls.name.value,
            icon: this.form.controls.icon.value,
        };
        this.CategoriesService.editCategory(
            this.categoryId,
            category
        ).subscribe(
            (response) => {
                this.getCategory();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Update Message',
                    detail: 'Category Updated Successfully',
                });
            },
            (err) => {
                console.log(err);
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Category Updating Error',
                });
            }
        );
    }

    delete(id: string) {
        this.ConfirmationService.confirm({
            message: 'Are you sure that you want to delete this category',
            accept: () => {
                this.CategoriesService.deleteCategory(id).subscribe(
                    (res) => {
                        this.getCategory();
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Delete Message',
                            detail: 'Category Deleted Successfully',
                        });
                    },
                    (err) => {
                        console.log(err);
                        this.messageService.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Category Deleting Error',
                        });
                    }
                );
            },
        });
    }

    getCategory() {
        this.CategoriesService.fetchCategories().subscribe(
            (data) => (this.categories = data),
            (err) => console.log(err)
        );
    }

    showCreate() {
        this.dailogeTitle = 'Create';
        this.onEdit = false;
        this.display = true;
    }

    showEdit(id: string) {
        this.onEdit = true;
        this.dailogeTitle = 'Edit';
        this.display = true;
        this.categoryId = id;

        this.CategoriesService.getCategory(id).subscribe((data) => {
            this.form.controls.name.setValue(data.name);
            this.form.controls.icon.setValue(data.icon);
        });
    }

    cancel() {
        this.display = false;
        this.clearInputs();
    }

    clearInputs() {
        this.form.reset();
    }
}
