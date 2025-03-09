import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; // Importer provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),provideHttpClient() // Fournit les routes à ton application
  ],
}).catch((err) => console.error(err));

