import { AuthService } from './../../../../../../libs/users/src/lib/services/auth.service';
import {
    IUser,
    defaultUSer,
} from './../../../../../../libs/users/src/lib/interfaces/user.interface';
import { Component, OnInit } from '@angular/core';
import { MenuItem, ConfirmationService } from 'primeng/api';

@Component({
    selector: 'admin-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
    users: IUser[] = [defaultUSer];
    items: MenuItem[];
    userId:string= '';
    isAdmin =false
    constructor(
        private AuthService: AuthService,
        private confirmationService: ConfirmationService
    ) {
        this.items = [
            { label: 'Info', icon: 'pi pi-fw pi-info-circle' },
            {
                label: 'Change Permissions',
                icon: 'pi pi-fw pi-pencil',
                command: () => {
                  this.confirmationService.confirm({
                      message:this.isAdmin?'Are you sure that you want to Remove From Admins': 'Are you sure that you want to Add To Admin',
                      accept: () => {
                         this.editIsAdmin(this.userId,this.isAdmin)
                      },
                  });}
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash',
                command: () => {
                  this.confirmationService.confirm({
                      message:
                          'Are you sure that you want to Delete This User?',
                      accept: () => {
                          this.deleteUser(this.userId);
                      },
                  });
              }
            },
        ];
    }

    ngOnInit(): void {
      this.getUsers()
    }
    deleteUser(id:string){
      this.AuthService.deleteUser(id).subscribe(
        data =>this.getUsers(),
        err => console.log(err)
      )
    }
    getUserdata(id: string , isAdmin:boolean) {
      this.userId = id,
      this.isAdmin = isAdmin
    }
    getUsers(){
      this.AuthService.getAllUsers().subscribe(
        (data) => (this.users = data),
        (err) => console.log(err)
    );
    }
    editIsAdmin(id:string ,isAdmin:boolean){
      isAdmin = !isAdmin
      this.AuthService.editIsAdmin(id,{isAdmin:isAdmin}).subscribe(
        data =>this.getUsers(),
        err =>console.log(err)
      )
    }
}
