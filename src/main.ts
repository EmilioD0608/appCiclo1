import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  headsetOutline,
  heartHalf,
  personAddOutline,
  star,
  heart,
  call,
  scan,
  scanOutline,
  qrCodeOutline,
  scanCircleOutline,
  openOutline
} from 'ionicons/icons'
// agregar iconocs
addIcons({
'add-circle-outline':addCircleOutline,
'heart-half':heartHalf,
'person-add-outline':personAddOutline,
'headset-outline':headsetOutline,
'star':star,
'heart':heart,
'call':call,
'scan':scan,
'scan-outline':scanOutline,
'qr-code-outline':qrCodeOutline,
'scan-circle-outline':scanCircleOutline,
'open-outline':openOutline
});
//fin agregar iconos
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
