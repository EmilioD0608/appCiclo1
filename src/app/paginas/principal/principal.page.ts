import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonIcon,IonButtons,IonBackButton,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton]
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
