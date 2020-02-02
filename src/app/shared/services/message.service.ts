import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  static URL = 'http://localhost:3000/messages/';

  constructor(private wsh: WshelperService) { }


  getAllMessages() {
    return this.wsh.get(MessageService.URL);
  }

  postMessage(obj) {
    return this.wsh.post(MessageService.URL, obj);
  }

  getOneMessage(id: number) {
    return this.wsh.get(MessageService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(MessageService.URL + 'delete/' + id);
  }

  update(id, performance) {
    return this.wsh.put(MessageService.URL + 'modify/' + id, performance);
  }
}
