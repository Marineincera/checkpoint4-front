import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../../shared/models/place';
import { PlaceService } from '../../shared/services/place.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {

  placeReceived: any;
  placeToDisplay: Place;
  representations = false;
  editionOpen = false;
  placeToUpdate: Place;

  placeUpdateForm = this.fb.group({
    city: [''],
    begin: [''],
    end: [''],
  });

  constructor(private router: Router,
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private fb: FormBuilder) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.placeReceived = this.placeService.getOnePlace(parseInt(id)).subscribe((data: Place) => {
      this.placeToDisplay = data;
      console.log(this.placeToDisplay);
    });
  }

  showRepresentations() {
    this.representations = !this.representations;
  }

  openEditingForm() {
    this.editionOpen = !this.editionOpen;
  }

  updatePlace(id) {
    this.placeToUpdate = {
      city: this.placeUpdateForm.value.city || this.placeToDisplay.city,
      begin: this.placeUpdateForm.value.begin || this.placeToDisplay.begin,
      end: this.placeUpdateForm.value.end || this.placeToDisplay.end
    };
    this.placeService.update(id, this.placeToUpdate).subscribe((data) => {
      console.log(id);

    });
  }
}
