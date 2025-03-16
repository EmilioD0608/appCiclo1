import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, } from '@ionic/angular/standalone';
import { IonButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { IonIcon, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonCard,IonBackButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonButton,IonButtons,IonBackButton,IonIcon,
    IonSegment, IonSegmentButton
  ]
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vecproductos:{
    foto:String;
    titulo:String;
    color: String;
    precio: String;

  }[]=[
    {
      foto:"/assets/img/Image20250313135525.png",
    titulo:"Zapato pro",
    color: "naranja",
    precio: "80",
    },
    {
      foto:"/assets/img/Image20250313135535.jpg",
    titulo:"Zapatito 2",
    color: "No se",
    precio: "100000",
    }
  ]

}
