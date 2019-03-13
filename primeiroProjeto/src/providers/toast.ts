import { ToastController } from 'ionic-angular';
import { Injectable } from '../../node_modules/@angular/core';

@Injectable()
export class Toast {

  constructor(public toastCtrl: ToastController) { }

  presentToast(toastMessage : string) {
    const toast = this.toastCtrl.create({
      message: toastMessage,
      duration: 3000
    });
    toast.present();
  }

  public loadingShow(toastMessage : string = "Login Falhou"){
    this.presentToast(toastMessage);
  }
}