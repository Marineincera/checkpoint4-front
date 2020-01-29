import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../../../shared/services/place.service';
import { Place } from '../../../../shared/models/place';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent implements OnInit {

  constructor(private placesService: PlaceService) { }

  places: Place[];

  ngOnInit() {
    this.getAllPlaces();

  }

  getAllPlaces() {
    this.placesService.getAllPlaces().subscribe((data: Place[]) => {
      this.places = data;
    });
  }

}
