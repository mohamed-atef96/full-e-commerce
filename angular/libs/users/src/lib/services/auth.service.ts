import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    authApi = `${environment.apiUrl}/auth`;
    constructor(private http: HttpClient) {}

    logIn(data: {
        email: string;
        password: string;
    }): Observable<{ user: IUser; token: string }> {
        return this.http.post<{ user: IUser; token: string }>(
            `${this.authApi}/signIn`,
            data
        );
    }

    getAllUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>(`${this.authApi}/allUsers`);
    }
    getUsersCount(): Observable<{ usersCount: string }> {
        return this.http.get<{ usersCount: string }>(
            `${this.authApi}/get/count`
        );
    }
    deleteUser(id:string){
      return this.http.delete(`${this.authApi}/deleteUser/${id}`)
    }
    editIsAdmin(id:string , data:{isAdmin:boolean}){
      return this.http.put(`${this.authApi}/updateIsAdmin/${id}` , data)
    }
}
