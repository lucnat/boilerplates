import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { ChatsPage } from '../pages/chats/chats'

 
@NgModule({
  declarations: [
    MyApp,
    ChatsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
