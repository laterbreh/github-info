import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { GithubInfoAppComponent, environment } from './app/';
import 'rxjs/add/operator/map';
if (environment.production) {
  enableProdMode();
}

bootstrap(GithubInfoAppComponent, [
  HTTP_PROVIDERS
]);
