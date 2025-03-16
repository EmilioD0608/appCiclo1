import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { IonButton,IonButtons,IonBackButton } from '@ionic/angular/standalone';
import { IonIcon, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

import { IonInput,IonFab,IonFabButton, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { ServicioqrService } from 'src/app/services/servicioqr.service';
import  {CapacitorBarcodeScanner} from '@capacitor/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
  standalone: true,
  imports: [IonIcon,IonButton,IonButtons,IonBackButton , CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonSegment, IonSegmentButton,IonItem, IonLabel, IonList,IonFabButton,IonFab,IonInput
  ]
})
export class LectorQRPage implements OnInit {
  scanResult: string | null = null;

  constructor(private alertController: AlertController) {}
  async ngOnInit() {
    
  }
//https://capacitorjs.com/docs/apis/barcode-scanner
  async scan() {
    try {
      // Se puede pasar alguna opción; en este ejemplo se usa 'ALL' para escanear cualquier formato.
      const result = await CapacitorBarcodeScanner.scanBarcode({ hint: 17 });
      
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
