import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Toast } from '../../providers/toast';
import { SobrePage } from '../sobre/sobre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toast : Toast){

  }

  public nome : string;
  public senha : any;

  public presentToast(){
    this.toast.loadingShow();
  }

  pushPage() {
    this.navCtrl.push(SobrePage, {
    id: "123",
    name: "Carl"
   });
  }


  public login(){
    if(this.nome === "diego" && this.senha === "diego123"){
      this.pushPage();
    }else{
      this.presentToast();
    }
  }
}
