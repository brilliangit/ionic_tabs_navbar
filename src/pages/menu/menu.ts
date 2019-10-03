/**
 * @author [Brillian Andrie]
 * @email [brillianandrie@gmail.com]
 * @create date 2019-10-03 10:09:52
 * @modify date 2019-10-03 10:09:52
 * @desc hendle menu
 */
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { Tab1Page } from './../tab1/tab1';
import { Tab2Page } from './../tab2/tab2';
import { SpecialPage } from './../special/special';

export interface PageInterface {
  title: string;
  pageName: any;
  tabComponent?: any;
  index?: number;
  icon: string;
}

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = TabsPage;
  @ViewChild(Nav) nav: Nav;
  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: TabsPage, tabComponent: Tab1Page, index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: TabsPage, tabComponent: Tab2Page, index: 1, icon: 'contacts' },
    { title: 'Special', pageName: SpecialPage , icon: 'shuffle' },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page: PageInterface) {
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      this.nav.setRoot(page.pageName,params);
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }

}
