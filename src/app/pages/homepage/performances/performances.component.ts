import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryPerformanceService } from '../../../shared/services/category-performance.service';
import { PerformanceService } from '../../../shared/services/performance.service';

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

  constructor(private router: Router, private performancesService: PerformanceService, private categoryPerformanceService: CategoryPerformanceService) { }

  ngOnInit() {
    this.getPerformances();
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

}
