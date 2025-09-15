import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { palette, definePreset } from '@primeuix/themes';

import { routes } from './app.routes';

const AuraBlue = definePreset(Aura, {
  semantic: {
    primary: palette('{blue}'),
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: AuraBlue,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
  ],
};
