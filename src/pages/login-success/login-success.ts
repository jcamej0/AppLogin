import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service.service';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginSuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-success',
  templateUrl: 'login-success.html',
})
export class LoginSuccessPage {
	nombre: string;
	apellido: string;
	numero: string;
	lastLogin: Date;
  constructor(public navCtrl: NavController, public navParams: NavParams, public AuthService: AuthService) {  }

  ionViewCanEnter() {
    this.nombre = this.navParams.data.firstName;
    this.apellido = this.navParams.data.lastName;
    this.numero = this.navParams.data.phoneNumber;
    this.lastLogin =  new Date(this.navParams.data.lastLogin);
    return this.AuthService.authenticated();
  }


  logoutUser() {
    this.AuthService.logout();
    this.navCtrl.push(HomePage);
  }
}
