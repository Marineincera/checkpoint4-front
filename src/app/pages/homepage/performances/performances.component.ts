import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesComponent implements OnInit {

  artistsList = false;
  showsList = true;

  constructor() { }

  ngOnInit() {
  }

  openArtistsList() {
    this.artistsList = true;
    this.showsList = false;
  }

  openshowsList() {
    this.showsList = true;
    this.artistsList = false;
  }


}
