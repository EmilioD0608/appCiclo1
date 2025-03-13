import { Component, OnInit } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import{IonicModule} from '@ionic/angular'
@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class BotonesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
