import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import{IonicModule} from '@ionic/angular'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonicModule],//,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton]
})
export class PrincipalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
