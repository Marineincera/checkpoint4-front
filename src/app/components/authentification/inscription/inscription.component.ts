import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { passwordValidator } from '../password-validator';
import { emailValidator } from '../email-validator';
import { SnackBarService } from '../../../shared/services/snack-bar.service.ts.service';
import { UserRoleService } from '../../../shared/services/user-role.service';
import { UserRole } from '../../../shared/models/user-role';

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
  userRoleToSend: UserRole;


  constructor(private fb: FormBuilder, private userService: UserService, private snackbar: SnackBarService, private roleService: UserRoleService) { }

  ngOnInit() {
  }



  createNewUser() {
    this.userCreated = {
      pseudo: this.userForm.value.pseudo,
      password: this.userForm.value.password,
      email: this.userForm.value.email,
      userRole: 2
    };
    console.log(this.userCreated);

  }

  sendNewUserToBdd(user: User) {
    console.log(user);
    this.getUserRole(2);
    this.userService.inscription(user.pseudo, user.email, user.password, user.userRole).subscribe();
  }

  getUserRole(id) {
    this.roleService.getOneUserRole(id).subscribe((data: UserRole) => {
      console.log(data);
      this.userRoleToSend = data;
    });

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
