import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryPerformanceService } from '../../../shared/services/category-performance.service';
import { PerformanceService } from '../../../shared/services/performance.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.scss']
})
export class PerformancesComponent implements OnInit {

  artistsList = false;
  showsList = true;
  performances: Performance[];
  shows = [];
  artists = [];
  conenctedUserRole;
  admin;

  constructor(private router: Router,
    private performancesService: PerformanceService,
    private categoryPerformanceService: CategoryPerformanceService,
    private userService: UserService) { }

  ngOnInit() {
    this.getPerformances();
    if (this.userService.connectedUser) {
      this.adminOrNot();
    }
  }


  openArtistsList() {
    this.artistsList = true;
    this.showsList = false;
  }

  openshowsList() {
    this.showsList = true;
    this.artistsList = false;
  }

  getPerformances() {
    this.performancesService.getAllPerformance().subscribe((data: Performance[]) => {
      this.performances = data;
      this.getShows(this.performances);

    });
  }

  getShows(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].categoryPerformance.id === 1) {
        this.shows.push(array[i]);
      } else {
        this.artists.push(array[i]);
      }
    }

  }

  adminOrNot() {
    if (this.userService.connectedUser.userRoleId === 2) {
      console.log('choupo');
    }


  }
}
