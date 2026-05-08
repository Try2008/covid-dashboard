import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHighcharts } from 'highcharts-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHighcharts({
      instance: () => import('highcharts').then(m => m.default ?? m)
    })
  ]
};
