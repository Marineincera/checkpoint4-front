import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Performance } from '../../../shared/models/performance';
import { VirtualTimeScheduler } from 'rxjs';
import { PerformanceService } from '../../../shared/services/performance.service';

@Component({
  selector: 'app-creation-perf',
  templateUrl: './creation-perf.component.html',
  styleUrls: ['./creation-perf.component.scss']
})
export class CreationPerfComponent implements OnInit {

  perfToCreate: Performance;

  performanceCreationForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    picture: ['', [Validators.required]],
    categoryPerformance: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private perfService: PerformanceService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.perfToCreate = this.performanceCreationForm.value;
    console.log(this.perfToCreate);
    this.perfService.postPerformance(this.perfToCreate).subscribe();



  }

}
