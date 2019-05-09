import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController){

  }

  async openPage(){
    const alert = await this.alertCtrl.create({
      header : 'Raccoon',
      message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur quam commodo semper mattis.',
      buttons : ['Ok']
    })
    await alert.present();
  }

  async openLoading(){
    const loading = await this.loadingCtrl.create({
      message : 'Hello, i am your message !',
      spinner : 'crescent',
      duration : 2000
    })
    await loading.present();
  }

  async openToast(){
    const toast = await this.toastCtrl.create({
      message : 'Hello, i am your message !',
      duration : 2000
    })
    await toast.present();
  }
}
