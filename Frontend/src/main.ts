import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import 'bootstrap/dist/js/bootstrap.min.js';

bootstrapApplication(AppComponent, {
 providers:[provideHttpClient()]
})
.catch(err=>console.error(err));