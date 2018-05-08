import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {AgendaPage} from "../pages/agenda/agenda";
import {SchedulePage} from "../pages/schedule/schedule";
import {SessionPage} from "../pages/session/session";
import {Tabs} from "../pages/tabs/tabs";

@NgModule({
  declarations: [
    MyApp,
    AgendaPage,
    SchedulePage,
    SessionPage,
    Tabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AgendaPage,
    SchedulePage,
    SessionPage,
    Tabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
