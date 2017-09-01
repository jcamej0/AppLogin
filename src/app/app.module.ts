import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule }    from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {apiService} from '../providers/api-service.service';
import { AuthService } from '../providers/auth-service.service';
import { LoginSuccessPage } from '../pages/login-success/login-success';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginSuccessPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginSuccessPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    apiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
