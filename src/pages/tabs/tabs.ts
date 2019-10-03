/**
 * @author [Brillian Andrie]
 * @email [brillianandrie@gmail.com]
 * @create date 2019-10-03 10:11:24
 * @modify date 2019-10-03 10:11:24
 * @desc handle tabs menu
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Tab1Page } from './../tab1/tab1';
import { Tab2Page } from './../tab2/tab2';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = Tab1Page;
  tab2Root: any = Tab2Page;
  myIndex: number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
