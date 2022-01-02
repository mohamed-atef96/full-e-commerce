import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategorey } from '../interfaces/categories.interface';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
@Injectable({
    providedIn: 'root',
})
export class CategoriesService {
    categoryApi = `${environment.apiUrl}/category`;
    constructor(private http: HttpClient) {}

    fetchCategories(): Observable<ICategorey[]> {
        return this.http.get<ICategorey[]>(this.categoryApi);
    }
    createCategory(category: ICategorey) {
        return this.http.post(`${this.categoryApi}/create`, category);
    }
    editCategory(id: string, category: ICategorey): Observable<ICategorey> {
        return this.http.put<ICategorey>(
            `${this.categoryApi}/update/${id}`,
            category
        );
    }
    getCategory(id: string): Observable<ICategorey> {
        return this.http.get<ICategorey>(`${this.categoryApi}/${id}`);
    }
    deleteCategory(id: string) {
        return this.http.delete(`${this.categoryApi}/delete/${id}`);
    }
}
