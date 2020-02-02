
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { passwordValidator } from '../password-validator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../../pages/homepage/introduction/introduction.component';
import { emailValidator } from '../email-validator';
import { UserService } from '../../../shared/services/user.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {


  userForm = this.fb.group({
    password: ['', [Validators.required, passwordValidator]],
    email: ['', [Validators.required, emailValidator]],
  });

  constructor(private fb: FormBuilder, private userService: UserService,
    dialogRef: MatDialogRef<ConnexionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
