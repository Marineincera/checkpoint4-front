import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  @Input() perf: Performance;

  constructor() { }

  ngOnInit() {
  }

}
