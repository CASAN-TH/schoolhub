import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabNavPage } from '../pages/tab-nav/tab-nav';
import { AttendancePage } from '../pages/attendance/attendance';
import { NotePage } from '../pages/note/note';
import { NotificationPage } from '../pages/notification/notification';
import { EbookPage } from '../pages/ebook/ebook';
import { NewsPage } from '../pages/news/news';
import { EventPage } from '../pages/event/event';
import { CalendarModule } from "ion2-calendar";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabNavPage,
    AttendancePage,
    NotePage,
    NotificationPage,
    EbookPage,
    NewsPage,
    EventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CalendarModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabNavPage,
    AttendancePage,
    NotePage,
    NotificationPage,
    EbookPage,
    NewsPage,
    EventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
