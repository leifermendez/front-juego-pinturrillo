import { EventEmitter, Injectable, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class SocketWebService extends Socket {


  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor(
    public cookieService: CookieService,

  ) {
    super({
      url: 'http://localhost:5000',
      options: {
        query: {
          nameRoom: cookieService.get('room')
        },
      }
    })
    this.listen();
  }

  listen = () => {
    this.ioSocket.on('evento', res => this.outEven.emit(res));   

  }
  emitEvent = (payload = {}) => {
    this.ioSocket.emit('evento', payload)

  }
}
