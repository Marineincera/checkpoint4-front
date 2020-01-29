import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.scss']
})
export class InformationsComponent implements OnInit {

  agendaDisplay = true;
  priceDisplay = false;
  contactDisplay = false;

  constructor() { }

  ngOnInit() {
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
    this.agendaDisplay = true;
    this.contactDisplay = false;
    this.priceDisplay = false;
  }
}
