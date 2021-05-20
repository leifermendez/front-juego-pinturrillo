import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CookieService } from 'ngx-cookie-service';
// import { SocketIoModule } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { HomeComponent } from './home/home.component';
import { DrawComponent } from './draw/draw.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4000', options: {} };
@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    HomeComponent,
    DrawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SocketIoModule
    SocketIoModule.forRoot(config)

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
