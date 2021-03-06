import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'الصفحة الرئيسية',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'المواضيع',
      url: '/topic',
      icon: ''
    },
    {
      title: 'المدربين',
      url: '/tutors',
      icon: ''
    }
    ,
    {
      title: 'من نحن',
      url: '/',
      icon: ''
    }
    ,
    {
      title: 'التسجيل / تسجيل الدخول  ',
      url: '/firstpage',
      icon: ''
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
