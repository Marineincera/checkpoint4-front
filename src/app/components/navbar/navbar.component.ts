import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  connectedUser: User;
  admin = false;


  ngOnInit() {
    if (localStorage.getItem('TOKEN')) {
      console.log('token plein');

      this.userService.getMe().subscribe((data: User) => {
        console.log('data');
        console.log(data);
        this.connectedUser = this.userService.connectedUser;
        if (this.userService.connectedUser.userRole.id === 2) {
          this.userService.admin = true;
          this.admin = true;
        }

      });
    }


  }
}
