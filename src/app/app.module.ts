import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//pacges for app
import {HttpClientModule} from "@angular/common/http";
import { IonicStorageModule } from '@ionic/storage';
import { Network } from '@ionic-native/network/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
//services for app
import {UsersService} from "./services/users.service";
import {StoresService} from "./services/stores.service";
import {CategoriesService} from "./services/categories.service";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(), AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},InAppBrowser,FilePath,ImagePicker,Clipboard,SocialSharing,File,FileTransfer,StatusBar,Network,UsersService,CategoriesService,StoresService,CallNumber],
  bootstrap: [AppComponent],
})
export class AppModule {}
