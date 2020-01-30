import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  @Input() perf: Performance;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToPerformanceDetails(id: number) {
    this.router.navigate(['/performance/' + id]);
  }

}
