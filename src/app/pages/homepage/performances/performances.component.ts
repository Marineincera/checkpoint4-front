import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesComponent implements OnInit {

  artistsList = false;
  showsList = true;

  constructor(private router: Router) { }

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
