import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular'
import Swiper from 'swiper';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule],//IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SwiperPage implements OnInit {
swiper: Swiper|undefined;
  constructor() { }

  ngOnInit() {
  }

}
