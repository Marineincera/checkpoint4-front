import { Component, OnInit } from '@angular/core';
import { PerformanceService } from '../../../../shared/services/performance.service';
import { Performance } from '../../../../shared/models/performance';
import { CategoryPerformanceService } from '../../../../shared/services/category-performance.service';
import { CategoryPerformance } from '../../../../shared/models/category-performance';
import { log } from 'util';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss']
})
export class ShowsListComponent implements OnInit {

  constructor(private performancesService: PerformanceService, private categoryPerformanceService: CategoryPerformanceService) { }

  performances: Performance[];
  shows = [];

  ngOnInit() {
    this.getPerformances();

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
      }
    }

  }

}
