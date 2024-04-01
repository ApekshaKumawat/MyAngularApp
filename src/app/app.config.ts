import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from './user.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
          provideHttpClient(),
          importProvidersFrom(UserService)]
};
