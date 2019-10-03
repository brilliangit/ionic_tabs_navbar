/**
 * @author [Brillian Andrie]
 * @email [brillianandrie@gmail.com]
 * @create date 2019-10-03 10:10:13
 * @modify date 2019-10-03 10:10:13
 * @desc Special Page
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-special',
  templateUrl: 'special.html',
})
export class SpecialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialPage');
  }

}
