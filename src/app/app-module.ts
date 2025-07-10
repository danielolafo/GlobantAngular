import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Dashboard } from './dashboard/dashboard';
import { HttpClientModule } from '@angular/common/http';
import { Login } from './login/login';
import { City } from './city/city';
import { NewCity } from './city-components/new-city/new-city';
import {RouterModule, Routes} from '@angular/router';
import { ConfirmationModal } from './confirmation-modal/confirmation-modal';

const appRoutes: Routes = [
  {path: 'new-city', component: NewCity},
  {path: 'cities', component: City},
  {path: '**', component: Login}
];

@NgModule({
  declarations: [
    App,
    Dashboard,
    Login,
    City,
    NewCity,
    ConfirmationModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes  // <-- debugging purposes only
      )
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
