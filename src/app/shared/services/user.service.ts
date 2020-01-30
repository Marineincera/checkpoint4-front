import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/';

  connectedUser: User;

  constructor(private http: HttpClient, private wsh: WshelperService) { }


  getAllUser() {
    return this.wsh.get(UserService.URL + 'users/');
  }

  postUser(user) {
    return this.wsh.post(UserService.URL + 'users/', user);
  }

  getOneUser(id: number) {
    return this.wsh.get(UserService.URL + 'users/' + id.toString());
  }

  delete(id) {
    return this.wsh.delete(UserService.URL + 'users/delete/' + id);
  }

  update(id, user) {
    return this.wsh.put(UserService.URL + 'users/modify/' + id, user);
  }

  public connexion(email: string, password: string) {
    return this.http.post(UserService.URL + 'auth/signin', { email, password }, { observe: 'response' })
      .pipe(map((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT_TOKEN');
        console.log('token :' + token);
        console.log('response' + response);
        this.connectedUser = response.body;
        localStorage.setItem('TOKEN', token);
        return response.body;

      }));
  }
  public inscription(pseudo: string, email: string, password: string) {
    return this.http.post(UserService.URL + 'auth/signup', { pseudo, email, password });
  }

}
