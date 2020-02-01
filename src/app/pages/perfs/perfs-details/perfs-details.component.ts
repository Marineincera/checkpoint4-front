import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { PerformanceService } from '../../../shared/services/performance.service';
import { switchMap } from 'rxjs/operators';
import { Performance } from '../../../shared/models/performance';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryPerformance } from '../../../shared/models/category-performance';
import { CategoryPerformanceService } from '../../../shared/services/category-performance.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../../components/dialog/dialog.component';
import { UserService } from '../../../shared/services/user.service';


@Component({
  selector: 'app-perfs-details',
  templateUrl: './perfs-details.component.html',
  styleUrls: ['./perfs-details.component.scss']
})
export class PerfsDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: PerformanceService,
    private fb: FormBuilder,
    private categoryPerf: CategoryPerformanceService,
    public dialog: MatDialog,
    private userService: UserService) { }


  performanceToReceive: any;
  performanceToDisplay: Performance;
  perfToUpdate: Performance;
  typesOfPerf: CategoryPerformance[];
  typeNewPerf: number;
  updateopen = false;
  admin = false;

  performanceUpdateForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    picture: ['', [Validators.required]],
  });

  ngOnInit() {
    // Get ID of the selected performance
    const id = this.route.snapshot.paramMap.get('id');
    this.performanceToReceive = this.service.getOnePerformance(parseInt(id)).subscribe((data: Performance) => {
      this.performanceToDisplay = data;
      console.log(this.performanceToDisplay);
    });

    // Get categories
    this.categoryPerf.getAllCategoryPerformance().subscribe((data: CategoryPerformance[]) => {
      this.typesOfPerf = data;
      this.categoryPerf.categoriesPerformances = this.typesOfPerf;
    });

    if (this.userService.connectedUser) {
      this.admin = true;
    }
  }

  // UPDATE
  openUpdateForm() {
    this.updateopen = !this.updateopen;
  }

  typeSelected(id: number) {
    this.typeNewPerf = id;
  }

  updatePlace() {
    this.perfToUpdate = {
      name: this.performanceUpdateForm.value.name,
      description: this.performanceUpdateForm.value.description,
      picture: this.performanceUpdateForm.value.picture,
      categoryPerformance: this.typeNewPerf
    };
    this.service.update(this.performanceToDisplay.id, this.perfToUpdate).subscribe((data) => {
      console.log(data);

    });
  }



  // Delete

  deletePerf(id: number) {
    this.openDialog(id);
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.delete(id).subscribe();
      }
    });
  }

}
