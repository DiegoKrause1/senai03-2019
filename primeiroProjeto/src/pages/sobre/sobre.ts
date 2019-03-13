import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
    let id = navParams.get('id');
    let name = navParams.get('name');
    console.log(id);
    console.log(name);
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }

}
