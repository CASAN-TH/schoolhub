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
    NewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
