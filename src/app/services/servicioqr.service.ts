import { Injectable } from '@angular/core';
import { CapacitorBarcodeScanner } from '@capacitor/barcode-scanner';

@Injectable({
  providedIn: 'root'
})
export class ServicioqrService {

  constructor() { }

  async start_scan(val?: number){
    try{
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint: val || 17,
        cameraDirection: 1,


      });
      console.log(result);
      return (await result).ScanResult
    }catch(e){
      throw(e);
    }
  }
}
