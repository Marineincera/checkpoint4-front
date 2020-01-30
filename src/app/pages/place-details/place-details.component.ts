import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../../shared/models/place';
import { PlaceService } from '../../shared/services/place.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.scss']
})
export class PlaceDetailsComponent implements OnInit {

  placeReceived: any;
  placeToDisplay: Place;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private placeService: PlaceService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.placeReceived = this.placeService.getOnePlace(parseInt(id)).subscribe((data: Place) => {
      this.placeToDisplay = data;
      console.log(this.placeToDisplay);
    });
  }

}
