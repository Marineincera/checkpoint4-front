import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  static URL = 'http://localhost:3000/userroles';

  constructor() { }
}
