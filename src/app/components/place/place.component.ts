import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {

  @Input() place;
  representations = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showRepresentations() {
    this.representations = !this.representations;
  }

  goToPlaceDetails(id: number) {
    this.router.navigate(['/places/' + id]);
  }
}
