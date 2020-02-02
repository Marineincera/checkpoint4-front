import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../../shared/models/place';
import { PlaceService } from '../../shared/services/place.service';
import { FormBuilder, Validators } from '@angular/forms';
import { PlaceDialogComponent } from './place-dialog/place-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Representation } from '../../shared/models/representation';
import { RepresentationService } from '../../shared/services/representation.service';

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
  representationToUpdate: Representation;

  placeUpdateForm = this.fb.group({
    city: [''],
    begin: [''],
    end: [''],
    representation1: [''],
    representation2: [''],
    representation3: [''],
  });

  constructor(private router: Router,
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private representationService: RepresentationService) { }

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
    this.representations = false;
  }

  updatePlace(id) {
    this.placeToUpdate = {
      city: this.placeUpdateForm.value.city || this.placeToDisplay.city,
      begin: this.placeUpdateForm.value.begin || this.placeToDisplay.begin,
      end: this.placeUpdateForm.value.end || this.placeToDisplay.end
    };
    this.placeService.update(id, this.placeToUpdate).subscribe((data) => {
      console.log(data);
      this.updateRepresentations(0, this.placeUpdateForm.value.representation1, id);
      this.updateRepresentations(1, this.placeUpdateForm.value.representation2, id);
      this.updateRepresentations(2, this.placeUpdateForm.value.representation3, id);
      this.editionOpen = false;
    });
  }

  updateRepresentations(i: number, representation: number, id) {
    if (this.placeToDisplay.representations[i]) {
      this.representationToUpdate = {
        id: this.placeToDisplay.representations[i].id,
        beginHour: representation,
        place: id
      };
      this.representationService.update(this.representationToUpdate.id, this.representationToUpdate).subscribe((data: Representation) => {
        console.log(data);
      });
    } else {
      const representationToPost = {
        beginHour: representation,
        place: id
      };
      this.representationService.postRepresentation(representationToPost).subscribe();
    }

  }

  openConnectionModal(id) {
    const dialogRef = this.dialog.open(PlaceDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.placeService.delete(id).subscribe();
      }
    });
  }
}
