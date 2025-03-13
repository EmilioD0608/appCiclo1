import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import{IonicModule} from '@ionic/angular'
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]//IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
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
