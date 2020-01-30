import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PerformanceService } from '../../../shared/services/performance.service';
import { switchMap } from 'rxjs/operators';
import { Performance } from '../../../shared/models/performance';

@Component({
  selector: 'app-perfs-details',
  templateUrl: './perfs-details.component.html',
  styleUrls: ['./perfs-details.component.scss']
})
export class PerfsDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: PerformanceService) { }


  performanceToReceive: any;
  performanceToDisplay: Performance;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.performanceToReceive = this.service.getOnePerformance(parseInt(id)).subscribe((data: Performance) => {
      this.performanceToDisplay = data;
      console.log(this.performanceToDisplay);

    });

  }

}
