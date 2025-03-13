import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  heartHalf,
  personAddOutline,


} from 'ionicons/icons'
// agregar iconocs
addIcons({
'add-circle-outline':addCircleOutline,
'heart-half':heartHalf,
'person-add-outline':personAddOutline,
});
//fin agregar iconos
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
