import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Performance } from '../../../shared/models/performance';
import { VirtualTimeScheduler } from 'rxjs';
import { PerformanceService } from '../../../shared/services/performance.service';
import { CategoryPerformance } from '../../../shared/models/category-performance';
import { CategoryPriceService } from '../../../shared/services/category-price.service';
import { CategoryPerformanceService } from '../../../shared/services/category-performance.service';

@Component({
  selector: 'app-creation-perf',
  templateUrl: './creation-perf.component.html',
  styleUrls: ['./creation-perf.component.scss']
})
export class CreationPerfComponent implements OnInit {

  perfToCreate: Performance;
  typesOfPerf: CategoryPerformance[];
  typeNewPerf: number;

  performanceCreationForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    picture: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private perfService: PerformanceService, private categoryPerf: CategoryPerformanceService) { }

  ngOnInit() {
    this.categoryPerf.getAllCategoryPerformance().subscribe((data: CategoryPerformance[]) => {
      this.typesOfPerf = data;
      console.log(this.typesOfPerf);

    });
  }

  typeSelected(id: number) {
    this.typeNewPerf = id;
  }

  onSubmit() {
    this.perfToCreate = {
      name: this.performanceCreationForm.value.name,
      picture: this.performanceCreationForm.value.picture,
      description: this.performanceCreationForm.value.description,
      categoryPerformance: this.typeNewPerf
    };

    console.log(this.perfToCreate);
    this.perfService.postPerformance(this.perfToCreate).subscribe();
  }

}
