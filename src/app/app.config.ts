import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Define las rutas aquí
    provideHttpClient(withInterceptorsFromDi()), // Agrega HttpClient correctamente
    provideAnimations() // Habilita las animaciones
  ]
};