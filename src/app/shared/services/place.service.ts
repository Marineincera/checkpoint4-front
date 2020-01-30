import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  static URL = 'http://localhost:3000/places/';

  constructor(private wsh: WshelperService) { }



  getAllPlaces() {
    return this.wsh.get(PlaceService.URL);
  }

  postPlace(performance) {
    return this.wsh.post(PlaceService.URL, performance);
  }

  getOnePlace(id: number) {
    return this.wsh.get(PlaceService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(PlaceService.URL + 'delete/' + id);
  }

  update(id, performance) {
    return this.wsh.put(PlaceService.URL + 'modify/' + id, performance);
  }
}
