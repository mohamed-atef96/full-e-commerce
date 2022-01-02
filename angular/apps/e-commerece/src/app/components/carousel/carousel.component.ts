import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
    sliderImages: string[] = []
    constructor() {}

    ngOnInit(): void {
      this.sliderImages = [
        '../../../assets/images/slide-1.jpg',
        '../../../assets/images/slide-2.jpg',
        '../../../assets/images/slide-3.jpg',
    ];
    }
}
