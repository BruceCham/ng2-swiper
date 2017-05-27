import { Component } from '@angular/core';
declare let Swiper:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(
    ) { }

  ngAfterViewInit(){
    new Swiper('.swiper-container',{
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
        spaceBetween: 30
    });
  }
}
