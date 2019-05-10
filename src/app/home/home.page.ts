<<<<<<< HEAD
import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
=======
import { Component, ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service';
import { AlertController, LoadingController, ToastController, Platform, IonList, ModalController } from '@ionic/angular';
import { AddModalPage } from '../add-modal/add-modal.page';
>>>>>>> Add SQLite CRUD Feature

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

<<<<<<< HEAD
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController){

=======
  items: Item[] = [];
  dataReturned:any;
  newItem: Item = <Item>{};
 
  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: StorageService, private plt: Platform, 
    public alertCtrl: AlertController, public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController, public modalController: ModalController){
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  // READ
  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  // UPDATE
  updateItem(item: Item) {
    item.title = `UPDATED: ${item.title}`;
    item.modified = Date.now();

    this.storageService.updateItem(item).then(item => {
      this.showToast('Item updated!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or update it inside the array directly
    });
  }

  // DELETE
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      this.mylist.closeSlidingItems(); // Fix or sliding is stuck afterwards
      this.loadItems(); // Or splice it from the array directly
    });
  }

  // Helper
  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  } 

  async openModal() {
    const modal = await this.modalController.create({
      component: AddModalPage,
      componentProps: {
        "paramID": 123,
        "paramTitle": "Test Title"
      },
      cssClass: 'modal-css'
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        this.loadItems();
      }
    });
 
    return await modal.present();
>>>>>>> Add SQLite CRUD Feature
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
