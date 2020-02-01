import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  static URL = 'http://localhost:3000/userroles/';

  constructor(private wsh: WshelperService) { }


  getOneUserRole(id: number) {
    return this.wsh.get(UserRoleService.URL + id.toString());
  }
}
