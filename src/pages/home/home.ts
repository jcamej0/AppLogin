import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController  } from 'ionic-angular';
import {apiService} from '../../providers/api-service.service';
import { ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service.service';
import { LoginSuccessPage } from '../login-success/login-success';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model: any = {};
  response: any[] = [];
  constructor(
  public navCtrl: NavController,
  public apiService: apiService,
  public toastCtrl: ToastController,
  public alertCtrl: AlertController, 
  public loadingCtrl:LoadingController,
  public AuthService: AuthService,

  ) {}


loginUser(){
	this.AuthService.login();
}

logoutUser(){
	this.AuthService.logout();
}
 nextPage(data) {
    this.navCtrl.push(LoginSuccessPage,data).catch(err => {
      let alert = this.alertCtrl.create({
        title: 'Bloqueado',
        subTitle: 'Debes loguear antes',
        buttons: ['Ok']
      });
      alert.present();
    });
  }

  errorToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuario no se encuentra',
      duration: 3000
    });
    toast.present();
  }

    logueo() {
    let loader = this.loadingCtrl.create({
      content: "Logueando...",
      duration: 1000
    });
    loader.present();
    this.loginUser();

  }

  login(){




  this.apiService.apiCall(this.model.email,this.model.password)
  .then(data => {

  		this.logueo();

  		this.nextPage(data);
  		
  })
  .catch(error =>{
  this.errorToast();
  })
  }
}