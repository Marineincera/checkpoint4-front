import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/users/';


  constructor(private wsh: WshelperService) { }


  getAllUser() {
    return this.wsh.get(UserService.URL);
  }

  postUser(user) {
    return this.wsh.post(UserService.URL, user);
  }

  getOneUser(id: number) {
    return this.wsh.get(UserService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(UserService.URL + 'delete/' + id);
  }

  update(id, user) {
    return this.wsh.put(UserService.URL + 'modify/' + id, user);
  }


}
