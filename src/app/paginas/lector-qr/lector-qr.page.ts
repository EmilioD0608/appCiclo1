import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { IonButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { IonIcon, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

import { IonToast } from '@ionic/angular/standalone';
import  {CapacitorBarcodeScanner} from '@capacitor/barcode-scanner';
import { AlertController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
  standalone: true,
  imports: [IonIcon,IonButton,IonButtons,IonBackButton , CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardTitle
  ]
})
export class LectorQRPage implements OnInit {
  scanResult: string | null = null;

  constructor() {}
  async ngOnInit() {
    
  }
//https://capacitorjs.com/docs/apis/barcode-scanner
  async scan() {
    try {
      // Se puede pasar alguna opción; en este ejemplo se usa 0 para escanear QR.
      const result = await CapacitorBarcodeScanner.scanBarcode({ hint: 0 });
      
      if (result.ScanResult) {
        this.scanResult = result.ScanResult;
      } else {
        this.scanResult = 'No se detectó ningún código.';
      }
    } catch (error) {
      console.error('Error al escanear:', error);
      this.scanResult = 'Error al escanear el código.';
    }
  }
}
