/**
 * @author [Brillian Andrie]
 * @email [brillianandrie@gmail.com]
 * @create date 2019-10-03 10:08:40
 * @modify date 2019-10-03 10:08:40
 * @desc Login Pages
 */

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    this.navCtrl.setRoot(MenuPage);
  }

}
