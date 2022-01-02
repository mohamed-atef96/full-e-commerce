import { Router } from '@angular/router';
import { LocalStorageService } from './../../../../../libs/users/src/lib/services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
    constructor(private LocalStorageService:LocalStorageService , private router:Router) {}

    ngOnInit(): void {}
    logOut(){
      this.LocalStorageService.removeRoken();
      this.router.navigateByUrl('/login')
    }
}
