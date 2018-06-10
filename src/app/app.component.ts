import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabNavPage } from '../pages/tab-nav/tab-nav';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabNavPage;

  students: Array<{displayName: string, image: string, school: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.students = [
      { displayName: 'ธีระ ทับฤทธิ์', image : 'https://www.facebook.com/search/async/profile_picture/?fbid=100013885394623&width=72&height=72', school: {name : 'ไตรพัฒน์'} },
      { displayName: 'ณฐกร ทับฤทธิ์', image : 'https://www.facebook.com/search/async/profile_picture/?fbid=100016974152642&width=72&height=72', school: {name : 'เซนต์แคทเธอรีน'} }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(student) {
    // Reset the content nav to have just this student
    // we wouldn't want the back button to show in this scenario
    
  }
}
