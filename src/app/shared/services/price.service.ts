import { Injectable } from '@angular/core';
import { WshelperService } from './wshelper.service';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  static URL = 'http://localhost:3000/prices/';

  constructor(private wsh: WshelperService) { }


  getAllPrices() {
    return this.wsh.get(PriceService.URL);
  }

  postPrice(performance) {
    return this.wsh.post(PriceService.URL, performance);
  }

  getOnePrice(id: number) {
    return this.wsh.get(PriceService.URL + id.toString());
  }

  delete(id) {
    return this.wsh.delete(PriceService.URL + 'delete/' + id);
  }

  update(id, performance) {
    return this.wsh.put(PriceService.URL + 'modify/' + id, performance);
  }
}
