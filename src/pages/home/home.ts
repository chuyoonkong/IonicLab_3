import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusPage } from '../status/status';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openStatus(){
    this.navCtrl.push(StatusPage);
  }
}
