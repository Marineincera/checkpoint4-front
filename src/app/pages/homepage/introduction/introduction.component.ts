import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthentificationComponent } from '../../../components/authentification/authentification.component';
import { User } from '../../../shared/models/user';
import { UserService } from '../../../shared/services/user.service';

export interface DialogData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})

export class IntroductionComponent implements OnInit {

  email: string;
  password: string;
  userToConnect: User;
  connectedUser: User;
  connexionButton = true;

  constructor(public dialog: MatDialog,
    private userService: UserService) { }

  ngOnInit() {
  }



  openConnectionModal() {
    const dialogRef = this.dialog.open(AuthentificationComponent, {
      width: '400px',
      height: '600px',
      data: { email: this.email, password: this.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result apres fermeture');
      this.email = result.email;
      this.password = result.password;
      this.userToConnect = {
        email: this.email, password: this.password
      };
      this.tryToConnectUser(this.userToConnect);
      this.connexionButton = false;
    });
  }

  tryToConnectUser(user: User) {
    this.userService.connexion(user.email, user.password).subscribe((data) => {
      this.connectedUser = data;
      console.log('connected user : ');
      console.log(this.connectedUser);
      this.userService.connectedUser = this.connectedUser;
    });
  }

}
