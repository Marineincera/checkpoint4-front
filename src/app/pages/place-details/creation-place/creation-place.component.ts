import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Place } from '../../../shared/models/place';
import { PlaceService } from '../../../shared/services/place.service';
import { UserService } from '../../../shared/services/user.service';
import { RepresentationService } from '../../../shared/services/representation.service';
import { Representation } from '../../../shared/models/representation';

@Component({
  selector: 'app-creation-place',
  templateUrl: './creation-place.component.html',
  styleUrls: ['./creation-place.component.scss']
})
export class CreationPlaceComponent implements OnInit {

  placeToCreate: Place;
  placeToCreateId: number;
  representationToCreate: Representation;

  placeCreationForm = this.fb.group({
    city: ['', [Validators.required]],
    begin: ['', [Validators.required]],
    end: ['', [Validators.required]],
    representation1: ['', [Validators.required]],
    representation2: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder, private placeService: PlaceService, private userService: UserService, private representationService: RepresentationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.placeToCreate = {
      city: this.placeCreationForm.value.city,
      begin: this.placeCreationForm.value.begin,
      end: this.placeCreationForm.value.end,
    };

    console.log(this.placeToCreate);
    this.placeService.postPlace(this.placeToCreate).subscribe((data: Place) => {
      console.log(data);
      this.placeToCreateId = data.id;
      this.postRepresentation(this.placeToCreateId);
    });

  }

  postRepresentation(id) {
    if (this.placeCreationForm.value.representation1) {
      this.representationToCreate = {
        beginHour: this.placeCreationForm.value.representation1,
        place: id
      };
      console.log(this.representationToCreate);
      this.representationService.postRepresentation(this.representationToCreate).subscribe((data: Representation) => {
        console.log(data);
      });
    }
  }
}
