import { Component, OnInit, Input } from '@angular/core';
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

  @Input() shows;

  constructor(private performancesService: PerformanceService, private categoryPerformanceService: CategoryPerformanceService) { }



  ngOnInit() {


  }



}
