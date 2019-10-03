/**
 * @author [Brillian Andrie]
 * @email [brillianandrie@gmail.com]
 * @create date 2019-10-03 10:11:02
 * @modify date 2019-10-03 10:11:02
 * @desc tabs2 page
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab2Page');
  }

}
