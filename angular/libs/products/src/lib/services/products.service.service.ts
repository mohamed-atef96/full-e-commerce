import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IProduct } from '../interfaces/products.interface';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    productApi = `${environment.apiUrl}/product`;
    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productApi);
    }

    searchProducts(query: string): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.productApi}?search=${query}`);
    }

    getProductsByCat(query: string): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(
            `${this.productApi}?categories=${query}`
        );
    }

    getFeaturedProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.productApi}/get/featured`);
    }
    getTopProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.productApi}/get/topRated`);
    }
    getNewProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(`${this.productApi}/get/new?count=4`);
    }
    getCatProducts(id: string): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(
            `${this.productApi}/get/category/${id}`
        );
    }
    createProduct(product: FormData) {
        return this.http.post(`${this.productApi}/create`, product);
    }
    deleteProduct(id: string) {
        return this.http.delete(`${this.productApi}/delete/${id}`);
    }
    getProduct(id: string): Observable<IProduct> {
        return this.http.get<IProduct>(`${this.productApi}/${id}`);
    }

    editProduct(id: string, category: FormData): Observable<IProduct> {
        return this.http.put<IProduct>(
            `${this.productApi}/update/${id}`,
            category
        );
    }
    getProductsCount(): Observable<{ productCount: string }> {
        return this.http.get<{ productCount: string }>(
            `${this.productApi}/get/count`
        );
    }
}
