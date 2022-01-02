import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { BannerComponent } from './banner/banner.component';

export const uiRoutes: Route[] = [];

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
      BannerComponent
    ],
    exports: [
      BannerComponent
    ],
})
export class UiModule {}
