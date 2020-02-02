import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';
import { Representation } from '../models/representation';

@Injectable({
  providedIn: 'root'
})
export class RepresentationService {

  static URL = 'http://localhost:3000/representations/';

  constructor(private wsh: WshelperService) { }

  getAllRepresentations() {
    return this.wsh.get(RepresentationService.URL);
  }

  postRepresentation(representation: Representation) {
    return this.wsh.post(RepresentationService.URL, representation);
  }

  getOneRepresentation(id: number) {
    return this.wsh.get(RepresentationService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(RepresentationService.URL + 'delete/' + id);
  }

  update(id, representation: Representation) {
    return this.wsh.put(RepresentationService.URL + 'modify/' + id, representation);
  }
}
