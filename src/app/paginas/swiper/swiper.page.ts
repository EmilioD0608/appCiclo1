import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import Swiper from 'swiper';
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.page.html',
  styleUrls: ['./swiper.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButton,IonButtons,IonBackButton,IonIcon
  ]
})
export class SwiperPage implements OnInit {
swiper: Swiper|undefined;
  constructor() { }

  ngOnInit() {
  }

}
