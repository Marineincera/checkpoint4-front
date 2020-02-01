import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

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

    console.log(this.userService.connectedUser);
  }

}
