import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../app/app.config';
import { enableProdMode } from '@angular/core';
import { AppComponent } from '../app/app.component';

if(document.baseURI.includes('http://localhost:4200')){
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
