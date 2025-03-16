import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
//import { IonCard,IonBackButton, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
  standalone: true,
  imports: [IonButton,IonIcon,
//    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent, IonHeader, IonTitle, IonToolbar,CommonModule,FormsModule,
    IonButtons, IonBackButton
  ]
})
export class BotonesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fun_saludarConsola(){
    console.log("hola mundo")
  }
  fun_saludaNavegador(){
    alert("Hola diablo")
  }

}
