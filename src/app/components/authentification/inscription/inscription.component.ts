import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validator';
import { SnackBarService } from '../../../shared/services/snack-bar.service.ts.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  userForm = this.fb.group({
    pseudo: ['', [Validators.required]],
    password: ['', [Validators.required, passwordValidator]],
    email: ['', [Validators.required, emailValidator]],
  });
  userCreated: User;


  constructor(private fb: FormBuilder, private userService: UserService, private snackbar: SnackBarService) { }

  ngOnInit() {
  }



  createNewUser() {
    this.userCreated = {
      pseudo: this.userForm.value.pseudo,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
      userRoleId: 4
    };
    this.userForm.value;
  }

  sendNewUserToBdd(user: User) {
    this.userService.inscription(user.pseudo, user.email, user.password).subscribe();
  }

  clearForm() {
    this.userForm.reset();
    this.userForm.clearAsyncValidators();
  }

  onSubmit() {
    this.createNewUser();
    this.sendNewUserToBdd(this.userCreated);
    this.clearForm();
    this.snackbar.openSnackBar('Veuillez valider votre inscription en cliquant sur le lien envoyé par mail');
  }

}
