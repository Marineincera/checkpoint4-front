import { Component, OnInit, Input } from '@angular/core';
import { UserRoleService } from '../../../shared/services/user-role.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  agendaDisplay = true;
  priceDisplay = false;
  contactDisplay = false;

  @Input() admin;

  constructor(private userService: UserService) { }

  ngOnInit() {
    if (this.userService.connectedUser) {
      if (this.userService.admin = true) {
        this.admin = true;
      }
    }
  }


  openAgenda() {
    this.agendaDisplay = true;
    this.priceDisplay = false;
    this.contactDisplay = false;
  }

  openPrices() {
    this.priceDisplay = true;
    this.agendaDisplay = false;
    this.contactDisplay = false;
  }

  openContact() {
    this.agendaDisplay = false;
    this.contactDisplay = true;
    this.priceDisplay = false;
  }
}
