import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AttendancePage } from '../attendance/attendance';
import { NotePage } from '../note/note';
import { NotificationPage } from '../notification/notification';
import { EbookPage } from '../ebook/ebook';
import { NewsPage } from '../news/news';

/**
 * Generated class for the TabNavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tab-nav',
  templateUrl: 'tab-nav.html'
})
export class TabNavPage {

  attendanceRoot = AttendancePage
  noteRoot = NotePage
  notificationRoot = NotificationPage
  ebookRoot = EbookPage
  newsRoot = NewsPage


  constructor(public navCtrl: NavController) {}

}
