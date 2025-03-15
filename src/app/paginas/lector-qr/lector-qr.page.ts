import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import{IonicModule} from '@ionic/angular'
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LectorQRPage implements OnInit {
  qrResult: string  | null=null;
  constructor() { }

  ngOnInit() {
  }

  async escanearQR(){
    try{
      const resultadoQR = await BarcodeScanner.scan();
      if(resultadoQR.barcodes.length>0){
        this.qrResult = resultadoQR.barcodes[0].displayValue;
      }else{
        this.qrResult = "No se detectó código qr";
      }
    }catch(error){
      console.error('Error al escanear el QR', error);
      this.qrResult = 'Error al escanear el código QR.';
    }
  }


}
